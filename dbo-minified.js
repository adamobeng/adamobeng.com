
function draw(){var active_node_square_size=7;var total_node_square_size=active_node_square_size+2;var active_nodes=Math.pow(active_node_square_size,2);var num_nodes=Math.pow((active_node_square_size+2),2);var nodes=[];for(i=0;i<num_nodes;i++){is_in_active_column=((i%(active_node_square_size+2))<(active_node_square_size+1))&&((i%(active_node_square_size+2))>=1);is_in_active_row=((i/(active_node_square_size+2))>1)&&((i/(active_node_square_size+2))<(active_node_square_size+1));is_active=is_in_active_column&&is_in_active_row;if(is_active){nodes.push(new node(i,0,0,true));}
	else{nodes.push(new node(i,0,0,false));}}
	squareLayout();steps=0;setInterval(updateScreen,100);var canvas=document.getElementById("canvas");if(canvas.getContext){var ctx=canvas.getContext("2d");}
	else{return;}
	function node(number,x,y,active,dbo){this.number=0;this.x=x;this.y=y;this.colour="#000000";this.active=active;if(!dbo){if(this.active){this.dbo=[Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)];}
		else{this.dbo=[0,0,0];}}
		else{this.dbo=dbo;}}
		function resetSimulation(){for(i in nodes){if(nodes[i].active){nodes[i].dbo=[Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)];}
			else{nodes[i].dbo=[0,0,0];}}
			steps=0;}
			canvas.onclick=function(e){var pos=canvas.getBoundingClientRect();var click={x:e.clientX-pos.left,y:e.clientY-pos.top,};for(i in nodes){if(Math.abs(nodes[i].x-click.x)<20){if(Math.abs(nodes[i].y-click.y)<20){switch(nodes[i].dbo[0]){case 0:switch(nodes[i].dbo[1]){case 0:nodes[i].dbo=[1,0,0];break;case 1:nodes[i].dbo=[1,1,0];break;}
				break;case 1:switch(nodes[i].dbo[1]){case 0:nodes[i].dbo=[0,1,0];break;case 1:nodes[i].dbo=[0,0,0];break;}}}}}
				if((380<click.y)&&(click.y<400)){if((0<click.x)&&(click.x<70)){advanceSimulation();}
					if((80<click.x)&&(click.x<120)){resetSimulation();}}};function squareLayout(){cols=Math.sqrt(nodes.length);for(i in nodes){nodes[i].x=20+40*(i%cols);nodes[i].y=((active_node_square_size+2)*40)-20+(-40)*Math.floor((i/cols));}}
					function copyNodes(nodes_i){temp=[];for(i in nodes){temp.push(new node(i,nodes_i[i].x,nodes_i[i].y,nodes_i[i].active,[nodes_i[i].dbo[0],nodes_i[i].dbo[1],nodes_i[i].dbo[2]]));}
						return temp;}
						function advanceSimulation(){steps++;console.log("Step:",steps);temp_nodes=copyNodes(nodes);for(i in nodes){if(nodes[i].active&&(steps>0)){neighbours=[nodes[i-(active_node_square_size+2)],nodes[(i-1)+active_node_square_size+3],nodes[i-1+2],nodes[i-1]];total_d=0;total_b=0;total_o=0;for(j in neighbours){if(neighbours[j].dbo[0]==1){total_d++};if(neighbours[j].dbo[1]==1){total_b++};if(neighbours[j].dbo[2]==1){total_o++};}
							if((total_d/4)>0.5){temp_nodes[i].dbo[0]=1;}else{temp_nodes[i].dbo[0]=0};if((total_b/4)>0.5){temp_nodes[i].dbo[1]=1;}else{temp_nodes[i].dbo[1]=0};if((total_o/4)>0.5){temp_nodes[i].dbo[2]=1;}else{temp_nodes[i].dbo[2]=0};if(total_d>2){console.log(i);}}}
							nodes=copyNodes(temp_nodes);}
							function drawButton(x,y,text){ctx.font="14pt Arial";width=ctx.measureText(text).width;ctx.fillStyle="#a0a0a0";ctx.fillRect(x-2,y-2,width+4,22,Math.PI*2);ctx.fillStyle="#d0d0d0";ctx.fillRect(x,y,width+2,20,Math.PI*2);ctx.fillStyle="#ffffff";ctx.fillText(text,x,y+14);}
							ctx.translate(0.5,0.5);function updateScreen(){for(i in nodes){if((nodes[i].dbo[0]!=0)|(nodes[i].dbo[1]!=0))
								{nodes[i].colour="rgb("+nodes[i].dbo[0]*255+", 0 ,"+nodes[i].dbo[1]*255+")";}
								else
								{nodes[i].colour="#ffffff";}
								if(nodes[i].active){ctx.fillStyle=nodes[i].colour;}else{ctx.fillStyle="#ffffff";}
								ctx.beginPath();ctx.arc(nodes[i].x,nodes[i].y,19,0,Math.PI*2);ctx.fill();ctx.lineWidth=2;if(nodes[i].active==true){ctx.strokeStyle="#000000";}else{ctx.strokeStyle="#d0d0d0";}
								ctx.stroke();}
								drawButton(2,380,"step");drawButton(80,380,"reset");}}

								//  Minified using http://fmarcia.info/jsmin/test.html By Franck Marcia
								//  From the original idea of Douglas Crockford
