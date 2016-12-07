################################################################################
# Preliminaries
################################################################################

devtools::install_github('kbenoit/quanteda', ref='v0.9.8.9022')

library(readtext)
library(quanteda)


################################################################################
# Loading texts
################################################################################
inaug_texts <- readtext('https://archive.org/download/Inaugural-Address-Corpus-1789-2009/inaugural.zip')
str(inaug_texts)

inaug_corpus <- corpus(inaug_texts)

names(texts(inaug_corpus))

## Add in docvars that were not automatically detected
library(stringi)
docvars(inaug_corpus, c('year', 'president', 'extension')) <- stri_split_regex(names(texts(inaug_corpus)), '[.-]', simplify=T)
docvars(inaug_corpus)


## Remove README file
library(magrittr)
inaug_corpus %>% 
	corpus_subset(year != 'README') ->
	inaug_corpus

docvars(
	inaug_corpus
)

# Descriptive stats

summary(inaug_corpus)

kwic(inaug_corpus, "tax")
kwic(inaug_corpus, "tax*")


## Lexical dispersion/xray plot
textplot_xray(
	kwic(inaug_corpus, "terror*")
)


inaug_readability <- textstat_readability(inaug_corpus, measure=c('Flesch.Kincaid', 'Scrabble'))
inaug_readability[order(inaug_readability$Flesch.Kincaid),]

################################################################################
# Extracting features
################################################################################

## Feature creation

### Removing stopwords
inaug_dfm <- dfm(inaug_corpus)
head(inaug_dfm, 10, 10)
inaug_dfm <- dfm(inaug_corpus, remove = stopwords('english'))
head(inaug_dfm, 10, 10)

### Tokenizing
head(
	dfm(tokenize(inaug_corpus, what='sentence'))
)


head(
	dfm(tokenize(inaug_corpus, ngrams=2, skip=1, removePunct = TRUE))
)

head(
	dfm(tokenize(inaug_corpus), stem = TRUE), 10, 20
)


### Dictionaries
dict <- dictionary(list(
	fiscal=c('tax*', 'budget'),
	security=c('war', 'terror*')
))
head(
	dfm(tokenize(inaug_corpus), dictionary=dict),
 10, 20)


### tf-idf

inaug_dfm <- dfm(inaug_corpus, ignoredFeatures=stopwords('english'))

head(
	inaug_dfm
)
head(
	tfidf(inaug_dfm)
)

topfeatures(inaug_dfm, 20)
topfeatures(tfidf(inaug_dfm), 20)

### grouping
inaug_dfm <- dfm(inaug_corpus, ignoredFeatures=stopwords('english'), groups='president')

head(
	sort(inaug_dfm)[,1:10], 50, 10
)

### document clustering

require(magrittr)

inaug_corpus %>% corpus_subset(year > 1950) -> recent_corpus
recent_dfm <- dfm(recent_corpus, group = "president")
recent_dfm <- dfm_trim(recent_dfm, min_count=5, min_doc=3)
recent_dist_matrix <- textstat_dist(dfm_weight(recent_dfm, "relFreq"))
recent_matrix <- textstat_dist(recent_dfm)
recent_cluster <- hclust(recent_dist_matrix)
recent_cluster$labels <- docnames(recent_dfm)
plot(recent_cluster)

################################################################################
# Supervised scaling: Worscores
################################################################################

devtools::install_github('kbenoit/quantedaData')
library(quantedaData)
data(ukManifestos)

uk_corpus <- corpus_subset(ukManifestos, Year %in% c(1992, 1997) & Party %in% c("Con", "Lab", "LD"))

docvars(uk_corpus)

uk_dfm <- dfm(uk_corpus, removePunct = TRUE)

training_scores <- c(17.21, 5.35, 8.21, rep(NA, 3)) # the training data come from an expert survey
ws_fitted <- textmodel(uk_dfm, training_scores, model='wordscores')
ws_fitted

pred <- predict(ws_fitted, newdata=uk_dfm[4:6,], rescaling='lbg') #  Rescaling because of regression to the mean

# Evaluation
pred <- data.frame(pred@textscores)
pred$gold <- c(17.18, 9.17, 5.00) # this is also from the litterature

mean(abs(pred$textscore_lbg - pred$gold)) 
