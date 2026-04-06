import {useState,useEffect} from "react";
const _f=document.createElement("link");_f.rel="stylesheet";_f.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap";document.head.appendChild(_f);
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,Cell,PieChart,Pie,LineChart,Line,CartesianGrid} from "recharts";

const LOGO_JB="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABQAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDgaKKK6j50KKKKACiiigAooooAKKKKACiiigAooooA2vDPhm98Vai9jYy28ciRmQmd9oxnHGASevpSeJfDN74V1JbG+kt5JWjEgMD7hg8c5AI6elX/AAf4d1rVr4XmgXdsl5ZlZPmkZGTJIH8OCDg8c8Va13wX4jbxDFHqdzZy6pqRZ41NxzKR1AJAA9AMj0FTfU3VO9O6i79zjaKt6lpd9o941nqNrJbXC8lJBjI9QehHuKqVRi01owooooEFFFFABRRXofhj4U3XiHQE1SbUUtBOC1vH5W/cOgLHIxn27Um0ty4U5Tdoo0vgh/yE9Y/64xf+hNWt8R95+IPg7ys7/PGMf9dUrP8Ag3bvZeINftJSvmwqkbbTkZV2Bx7ZFdL4r1DTdO+Inhl7+0aZ3WSOGXzMLC7MqhiuPm6468ZzWT+I9Cmv9nSemv6mT8bY7X+xtLlYL9r+0sqHuU2kt+GdteK16l8VPCmsxudem1F7+0TCFGQIbYE8YA4K5xz1zjOa8tq4bHLiruq7qwUUUVZzBRRRQAV21t431I+EbLR7LVDp1zZFk3ZCi4iPQb8fKy8jsCD1yK4mik1cuE3HY6nwbf3nh/xTaXi3MSRu+y4USCQyxk8gKpJZu4wOuK7H4hvc3/irwk8tu8Es0gKwt95AZUwGx/Fjkjt07VxnhXxm/hISvZ6XazXEoAead2JwM/dA6dfxq7qPxHvNT1mx1afSrE3diG8glpCqk9yueSO1S073N4TgqfK2evfEi7gtPAOq+eyjzo/JjB/idiMAfz/Cvm3vWxr/AIp1fxNOkuqXRkWPPlxKNqJ9FHf3PNY9OMbInEVlVldbBRRRVHOFFFFABRRRQAUUUUAFFFFABRRRQB//2Q==";
const LOGO_NV="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='48' viewBox='0 0 240 48'%3E%3Crect x='1' y='1' width='46' height='46' rx='10' fill='%2300E5D4'/%3E%3Ctext x='24' y='33' font-family='Arial Black' font-size='20' font-weight='900' fill='%23000' text-anchor='middle'%3Ent%3C/text%3E%3Ctext x='64' y='34' font-family='Arial Black' font-size='24' font-weight='900' fill='%23111'%3ENuvian%3C/text%3E%3Ctext x='168' y='34' font-family='Arial' font-size='24' fill='%23111'%3ETech%3C/text%3E%3Ccircle cx='233' cy='40' r='5' fill='%23FFD700'/%3E%3C/svg%3E";
const JB="#0F5C4E",JB2="#1A7A68",JBL="#E1F5EE",GOLD="#C9A84C",GOLD2="#F0D080";
const TEXT="#1A2922",MUTED="#5A7A6A",RED="#C0392B",AMBAR="#E67E22",BLUE="#2980B9";
const COLORS=[JB,JB2,"#2D9E87","#52B788","#74C69D","#95D5B2","#B7E4C7","#0F5C4E","#1A7A68","#2D9E87","#52B788","#74C69D","#95D5B2","#40916C","#27AE60"];

const fmt=v=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0}).format(v);
const fmtN=v=>Number(v).toLocaleString("pt-BR",{maximumFractionDigits:2});
const calcPct=(a,b)=>b?((a-b)/b*100).toFixed(1):0;
const arrowFn=(a,b,inv=false)=>{const up=a>b;const good=inv?!up:up;return{icon:up?"▲":"▼",color:good?JB:RED,txt:Math.abs(calcPct(a,b))+" %"};};
const ticketColor=(v,mn,mx)=>{const p=(v-mn)/(mx-mn||1);return p<=0.33?JB:p<=0.66?AMBAR:RED;};
const ticketLabel=(v,mn,mx)=>{const p=(v-mn)/(mx-mn||1);return p<=0.33?"Excelente":p<=0.66?"Atenção":"Acima do ideal";};

/* ── MESES disponíveis — sempre usar o ÚLTIMO como mês atual ── */
const MESES=[
  {
    id:"fev",label:"Fevereiro 2026",short:"Fev",
    totalVal:2834920,totalOuro:6934.73,nLojas:13,metaRede:6100,auditVerif:812,auditTotal:812,daily:[["01/02",12138,32.5,4],["02/02",83234,231.8,31],["03/02",133408,335.2,28],["04/02",59491,144.7,14],["05/02",69303,160.8,19],["06/02",73477,182.6,25],["07/02",37792,99.9,20],["08/02",32013,73.2,5],["09/02",148597,363.5,35],["10/02",111135,286.2,32],["11/02",95359,250.4,21],["12/02",54893,144.6,26],["13/02",63526,159,31],["14/02",45449,127.3,24],["15/02",30198,71.8,11],["16/02",100170,271,28],["17/02",53273,139.8,15],["18/02",89105,213.6,24],["19/02",290467,669.1,36],["20/02",103858,263.1,35],["21/02",127577,253.5,22],["22/02",49010,111,10],["23/02",114075,269.5,31],["24/02",78839,199.9,27],["25/02",108363,274.2,28],["26/02",86220,204,26],["27/02",179127,413.5,32],["28/02",124572,302.4,29]],
    funil:{"Leads Novos":2389,"Leads Delegados":2877,"Em Atendimento":2861,"1º Contato":1677,"2º Contato":1176,"3º Contato":846,"Negociação":38,"Remarketing":736,"Agendamento":508,"Reagendamento":54,"Compras Ouro":714,"Compras Prata":58,"Total Compras":772,"Atend. Finalizados":2419},
    motivos:{"Sem Interesse":715,"Outro Material":147,"Cotação Baixa":99,"Quer Comprar Joias":76,"Mora Longe":103,"Joias Terceiros":4,"Vendeu Concorrente":85,"Não Fechou por Valor":32,"Vender Mais Frente":81},
    marketing:{disparados:2047,compras:22,gramas:302,valor:67579},
    tempo:{"Mauá":9,"Cuiabá":15,"Light":2,"Grand Plaza":24,"Boulevard":2,"Poços Caldas":23,"São Bernardo":2,"Suzano":17,"São Caetano":6,"Santos":1,"Brás":9,"Santa Maria":7,"São José SC":0,"Penha":0,"Osasco":0},
    lojas:[
      {n:"BOULEVARD",    regiao:"SP Capital",cidade:"Santo André, SP",ouro:1436.80,valOuro:587174,valTotal:588739,ticketOuro:408.67,meta:950,funcs:[{nome:"Aline",emoji:"👑",ouro:656.60,valor:284369,gSim:0,gNao:0},{nome:"Leila",emoji:"⭐",ouro:535.70,valor:203416,gSim:0,gNao:0},{nome:"Priscila",emoji:"🌟",ouro:120.40,valor:49359,gSim:0,gNao:0},{nome:"Maria",emoji:"💎",ouro:57.90,valor:23647,gSim:0,gNao:0}]},
      {n:"LIGHT",        regiao:"SP Capital",cidade:"São Paulo, SP",ouro:1142.70,valOuro:486205,valTotal:488809,ticketOuro:425.49,meta:850,funcs:[{nome:"Ligia",emoji:"👑",ouro:456.80,valor:196398,gSim:54,gNao:11},{nome:"Ítalo",emoji:"⭐",ouro:335.50,valor:142187,gSim:26,gNao:8},{nome:"Acsa",emoji:"🌟",ouro:311.10,valor:133646,gSim:24,gNao:17}]},
      {n:"GRAND PLAZA",  regiao:"SP ABC",cidade:"Santo André, SP",    ouro:1004.18,valOuro:412908,valTotal:414652,ticketOuro:411.19,meta:800,funcs:[{nome:"Bruna",emoji:"👑",ouro:441.98,valor:176149,gSim:49,gNao:10},{nome:"Emilly",emoji:"⭐",ouro:410.67,valor:181518,gSim:28,gNao:18},{nome:"Rosana",emoji:"🌟",ouro:118.03,valor:42309,gSim:9,gNao:6},{nome:"Tamires",emoji:"💎",ouro:16.40,valor:6518,gSim:0,gNao:2}]},
      {n:"SÃO CAETANO",  regiao:"SP ABC",cidade:"São Caetano do Sul, SP",    ouro:654.80, valOuro:257060,valTotal:258039,ticketOuro:392.58,meta:450,funcs:[{nome:"Michele",emoji:"👑",ouro:363.00,valor:135372,gSim:13,gNao:2},{nome:"Edivania S.",emoji:"⭐",ouro:291.80,valor:121689,gSim:24,gNao:13}]},
      {n:"MAUÁ",         regiao:"SP ABC",cidade:"Mauá, SP",    ouro:677.60, valOuro:241328,valTotal:242770,ticketOuro:356.15,meta:550,funcs:[{nome:"Jessica",emoji:"👑",ouro:313.20,valor:112937,gSim:34,gNao:19},{nome:"Bruna S.",emoji:"⭐",ouro:302.20,valor:110469,gSim:31,gNao:12},{nome:"Michele",emoji:"🌟",ouro:62.20,valor:17922,gSim:13,gNao:2}]},
      {n:"SÃO BERNARDO", regiao:"SP ABC",cidade:"São Bernardo do Campo, SP",    ouro:631.89, valOuro:253789,valTotal:254227,ticketOuro:401.64,meta:500,funcs:[{nome:"Tamires",emoji:"👑",ouro:309.60,valor:133000,gSim:0,gNao:2},{nome:"Mariana",emoji:"⭐",ouro:260.44,valor:96973,gSim:10,gNao:14},{nome:"Rosana",emoji:"🌟",ouro:50.85,valor:19214,gSim:9,gNao:6}]},
      {n:"POÇOS CALDAS", regiao:"MG",cidade:"Poços de Caldas, MG",        ouro:453.00, valOuro:201075,valTotal:201075,ticketOuro:443.88,meta:450,funcs:[{nome:"Regiane S.",emoji:"👑",ouro:453.00,valor:201075,gSim:0,gNao:26}]},
      {n:"CUIABÁ",       regiao:"MT",cidade:"Cuiabá, MT",        ouro:367.30, valOuro:162830,valTotal:164481,ticketOuro:443.32,meta:500,funcs:[{nome:"Maikon",emoji:"👑",ouro:367.30,valor:162831,gSim:18,gNao:17}]},
      {n:"SUZANO",       regiao:"SP Grande",cidade:"Suzano, SP", ouro:217.22, valOuro:73459, valTotal:73807, ticketOuro:338.18,meta:350,funcs:[{nome:"Alethea",emoji:"👑",ouro:79.80,valor:26703,gSim:1,gNao:7},{nome:"Simone S.",emoji:"⭐",ouro:66.90,valor:21470,gSim:8,gNao:9},{nome:"Cremilda",emoji:"🌟",ouro:58.02,valor:20672,gSim:7,gNao:10}]},
      {n:"BRÁS",         regiao:"SP Capital",cidade:"São Paulo, SP",ouro:148.20, valOuro:71132, valTotal:71132, ticketOuro:479.98,meta:200,funcs:[{nome:"Gabriel S.",emoji:"👑",ouro:125.75,valor:62225,gSim:3,gNao:4},{nome:"Gabriela",emoji:"⭐",ouro:22.45,valor:8907,gSim:3,gNao:2}]},
      {n:"SÃO JOSÉ SC",  regiao:"SP Interior",cidade:"São José dos Campos, SP",ouro:120.79,valOuro:45861, valTotal:45861, ticketOuro:379.68,meta:200,funcs:[{nome:"Maria Clara",emoji:"👑",ouro:64.50,valor:24319,gSim:0,gNao:2},{nome:"Regiane",emoji:"⭐",ouro:33.40,valor:14054,gSim:0,gNao:0},{nome:"Camilly",emoji:"🌟",ouro:22.89,valor:7488,gSim:0,gNao:0}]},
      {n:"SANTA MARIA",  regiao:"RS",cidade:"Santa Maria, RS",        ouro:29.60,  valOuro:9990,  valTotal:10173, ticketOuro:337.52,meta:200,funcs:[{nome:"Luciano",emoji:"👑",ouro:29.60,valor:9991,gSim:0,gNao:7}]},
      {n:"SANTOS",       regiao:"SP Litoral",cidade:"Santos, SP",ouro:50.65,  valOuro:21149, valTotal:21149, ticketOuro:417.56,meta:200,funcs:[{nome:"Raphaela S.",emoji:"👑",ouro:36.95,valor:15807,gSim:1,gNao:3},{nome:"Mari",emoji:"⭐",ouro:13.70,valor:5342,gSim:1,gNao:1}]},
      {n:"PENHA",        regiao:"SP Capital",cidade:"São Paulo, SP",ouro:0,      valOuro:0,     valTotal:0,     ticketOuro:0,     meta:200,funcs:[]},
      {n:"OSASCO",       regiao:"SP Grande",cidade:"Osasco, SP", ouro:0,      valOuro:0,     valTotal:0,     ticketOuro:0,     meta:200,funcs:[]},
    ]
  },
  {
    id:"mar",label:"Março 2026",short:"Mar",
    totalVal:3252550,totalOuro:8083.55,nLojas:15,metaRede:6400,auditVerif:951,auditTotal:954,daily:[["01/03",44564,105,11],["02/03",117233,283.5,27],["03/03",133979,316.2,32],["04/03",123688,315.6,34],["05/03",112478,272.2,32],["06/03",155650,379.6,41],["07/03",107386,278.3,25],["08/03",6160,15.6,5],["09/03",66429,185.2,27],["10/03",114827,274.1,27],["11/03",100073,254.4,25],["12/03",37050,91.7,19],["13/03",112249,271.4,36],["14/03",144442,344.7,34],["15/03",4607,13.1,3],["16/03",276364,619.8,47],["17/03",127535,315.6,36],["18/03",120087,273.4,34],["19/03",164048,429.4,26],["20/03",106182,269.5,45],["21/03",99284,256.2,29],["22/03",31954,80.6,9],["23/03",73119,199.3,35],["24/03",127073,318.9,29],["25/03",146761,356.9,45],["26/03",178119,464.7,40],["27/03",84307,221.7,35],["28/03",74247,210.5,20],["29/03",10200,25.8,6],["30/03",124478,331.6,34],["31/03",99213,262.9,28]],
    funil:{"Leads Novos":3838,"Leads Delegados":4378,"Em Atendimento":4129,"1º Contato":2464,"2º Contato":2154,"3º Contato":1630,"Negociação":35,"Remarketing":800,"Agendamento":423,"Reagendamento":61,"Compras Ouro":888,"Compras Prata":114,"Total Compras":1002,"Atend. Finalizados":4820},
    motivos:{"Sem Interesse":733,"Outro Material":186,"Cotação Baixa":174,"Quer Comprar Joias":133,"Mora Longe":132,"Joias Terceiros":13,"Vendeu Concorrente":126,"Não Fechou por Valor":73,"Vender Mais Frente":505},
    marketing:{disparados:2360,compras:28,gramas:334.48,valor:128732},
    tempo:{"Mauá":7,"Cuiabá":12,"Light":13,"Grand Plaza":22,"Boulevard":7,"Poços Caldas":29,"São Bernardo":5,"Suzano":21,"São Caetano":4,"Santos":3,"Brás":14,"Santa Maria":11,"São José SC":45,"Penha":3,"Osasco":2},
    lojas:[
      {n:"GRAND PLAZA",  regiao:"SP ABC",cidade:"Santo André, SP",    ouro:1361.37,valOuro:530050,valTotal:531596,ticketOuro:389.35,meta:800,funcs:[{nome:"Bruna",emoji:"👑",ouro:627.89,valor:256504,gSim:49,gNao:10},{nome:"Emilly",emoji:"⭐",ouro:454.31,valor:166092,gSim:46,gNao:11},{nome:"Rosana",emoji:"🌟",ouro:270.00,valor:104364,gSim:9,gNao:6},{nome:"Priscila",emoji:"💎",ouro:9.17,valor:3091,gSim:0,gNao:0}]},
      {n:"BOULEVARD",    regiao:"SP Capital",cidade:"Santo André, SP",ouro:1073.20,valOuro:446790,valTotal:449112,ticketOuro:416.32,meta:950,funcs:[{nome:"Leila",emoji:"👑",ouro:569.20,valor:230690,gSim:0,gNao:0},{nome:"Aline",emoji:"⭐",ouro:397.90,valor:175805,gSim:0,gNao:0},{nome:"Gisleide",emoji:"🌟",ouro:68.90,valor:27226,gSim:6,gNao:2},{nome:"Rodrigo",emoji:"💎",ouro:28.90,valor:10736,gSim:8,gNao:0}]},
      {n:"LIGHT",        regiao:"SP Capital",cidade:"São Paulo, SP",ouro:1002.00,valOuro:432666,valTotal:433402,ticketOuro:431.80,meta:850,funcs:[{nome:"Acsa",emoji:"👑",ouro:446.20,valor:190544,gSim:24,gNao:17},{nome:"Lígia",emoji:"⭐",ouro:243.90,valor:102352,gSim:42,gNao:4},{nome:"Priscila",emoji:"🌟",ouro:154.00,valor:83163,gSim:0,gNao:0},{nome:"Bruna",emoji:"💎",ouro:149.50,valor:54179,gSim:49,gNao:10}]},
      {n:"CUIABÁ",       regiao:"MT",cidade:"Cuiabá, MT",        ouro:640.20, valOuro:287040,valTotal:288065,ticketOuro:448.36,meta:500,funcs:[{nome:"Maikon",emoji:"👑",ouro:640.20,valor:287041,gSim:18,gNao:17}]},
      {n:"SÃO CAETANO",  regiao:"SP ABC",cidade:"São Caetano do Sul, SP",    ouro:654.80, valOuro:257060,valTotal:258039,ticketOuro:392.58,meta:450,funcs:[{nome:"Michele",emoji:"👑",ouro:363.00,valor:135372,gSim:13,gNao:2},{nome:"Edivania S.",emoji:"⭐",ouro:291.80,valor:121689,gSim:24,gNao:13}]},
      {n:"MAUÁ",         regiao:"SP ABC",cidade:"Mauá, SP",    ouro:707.80, valOuro:250241,valTotal:251057,ticketOuro:353.55,meta:550,funcs:[{nome:"Jessica",emoji:"👑",ouro:301.30,valor:100349,gSim:34,gNao:19},{nome:"Bruna S.",emoji:"⭐",ouro:257.90,valor:97406,gSim:31,gNao:12},{nome:"Michele",emoji:"🌟",ouro:139.30,valor:48767,gSim:13,gNao:2},{nome:"Camile",emoji:"💎",ouro:9.30,valor:3720,gSim:0,gNao:1}]},
      {n:"SÃO BERNARDO", regiao:"SP ABC",cidade:"São Bernardo do Campo, SP",    ouro:609.10, valOuro:235798,valTotal:237610,ticketOuro:387.13,meta:500,funcs:[{nome:"Tamires",emoji:"👑",ouro:333.27,valor:129508,gSim:0,gNao:2},{nome:"Mariana",emoji:"⭐",ouro:172.75,valor:64892,gSim:10,gNao:14},{nome:"Rosana",emoji:"🌟",ouro:103.08,valor:41398,gSim:9,gNao:6}]},
      {n:"PENHA",        regiao:"SP Capital",cidade:"São Paulo, SP",ouro:263.23, valOuro:108044,valTotal:108579,ticketOuro:410.46,meta:200,funcs:[{nome:"Bruna F.",emoji:"👑",ouro:239.86,valor:99643,gSim:10,gNao:9},{nome:"Ítalo",emoji:"⭐",ouro:21.92,valor:7851,gSim:26,gNao:8},{nome:"Acsa",emoji:"🌟",ouro:1.45,valor:551,gSim:24,gNao:17}]},
      {n:"SANTOS",       regiao:"SP Litoral",cidade:"Santos, SP",ouro:304.90, valOuro:109367,valTotal:109367,ticketOuro:358.70,meta:200,funcs:[{nome:"Mari",emoji:"👑",ouro:209.30,valor:77553,gSim:1,gNao:1},{nome:"Raphaela S.",emoji:"⭐",ouro:95.60,valor:31815,gSim:1,gNao:3}]},
      {n:"BRÁS",         regiao:"SP Capital",cidade:"São Paulo, SP",ouro:250.90, valOuro:109339,valTotal:109556,ticketOuro:435.79,meta:200,funcs:[{nome:"Gabriel S.",emoji:"👑",ouro:169.90,valor:73377,gSim:3,gNao:4},{nome:"Gabriela",emoji:"⭐",ouro:81.00,valor:35963,gSim:3,gNao:2}]},
      {n:"SUZANO",       regiao:"SP Grande",cidade:"Suzano, SP", ouro:339.00, valOuro:132828,valTotal:132901,ticketOuro:391.83,meta:350,funcs:[{nome:"Cremilda",emoji:"👑",ouro:165.00,valor:66876,gSim:7,gNao:10},{nome:"Alethea",emoji:"⭐",ouro:98.10,valor:37837,gSim:1,gNao:7},{nome:"Simone S.",emoji:"🌟",ouro:71.90,valor:26716,gSim:8,gNao:9}]},
      {n:"POÇOS CALDAS", regiao:"MG",cidade:"Poços de Caldas, MG",        ouro:358.67, valOuro:148429,valTotal:148691,ticketOuro:413.83,meta:450,funcs:[{nome:"Regiane S.",emoji:"👑",ouro:358.67,valor:148430,gSim:0,gNao:26}]},
      {n:"SANTA MARIA",  regiao:"RS",cidade:"Santa Maria, RS",        ouro:265.00, valOuro:96870, valTotal:97041, ticketOuro:365.55,meta:200,funcs:[{nome:"Luciano",emoji:"👑",ouro:265.00,valor:96871,gSim:0,gNao:7}]},
      {n:"SÃO JOSÉ SC",  regiao:"SP Interior",cidade:"São José dos Campos, SP",ouro:154.88,valOuro:56541, valTotal:57783, ticketOuro:365.07,meta:200,funcs:[{nome:"Regiane",emoji:"👑",ouro:21.23,valor:7544,gSim:0,gNao:0},{nome:"Maria Clara",emoji:"⭐",ouro:9.11,valor:3580,gSim:0,gNao:2},{nome:"Camilly",emoji:"🌟",ouro:6.89,valor:2662,gSim:0,gNao:0}]},
      {n:"OSASCO",       regiao:"SP Grande",cidade:"Osasco, SP", ouro:98.50,  valOuro:39671, valTotal:39744, ticketOuro:402.76,meta:200,funcs:[{nome:"Gisleide",emoji:"👑",ouro:98.50,valor:39672,gSim:11,gNao:1}]},
    ]
  }
];

/* Mês atual = último da lista */
const MES_ATUAL=MESES[MESES.length-1];
const MES_ANT=MESES.length>1?MESES[MESES.length-2]:null;

/* Derived */
const allTickets=MES_ATUAL.lojas.filter(l=>l.ticketOuro>0).map(l=>l.ticketOuro);
const minT=Math.min(...allTickets);
const maxT=Math.max(...allTickets);
const allFuncs=MESES.flatMap(m=>m.lojas.flatMap(l=>l.funcs.map(f=>({...f,loja:l.n,mes:m.id}))));
const allFuncsMar=MES_ATUAL.lojas.flatMap(l=>l.funcs.map(f=>({...f,loja:l.n})));

const origensRede=[{name:"Frequentador Shopping",count:298},{name:"Já é cliente",count:215},{name:"WhatsApp/Digital",count:130},{name:"Instagram/Google",count:88},{name:"Indicação",count:64},{name:"Outros",count:45}];
const tiposRede=[{name:"Aliança/Alianças",value:245,pct:38},{name:"Outros",value:210,pct:33},{name:"Anel",value:68,pct:11},{name:"Corrente",value:55,pct:9},{name:"Brincos",value:28,pct:4},{name:"Pulseira",value:32,pct:5}];

/* ── UI Helpers ── */
const Card=({title,children,style:st={}})=>(
 <div style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:14,boxShadow:"0 1px 6px rgba(0,0,0,0.05)",...st}}>
  {title&&<div style={{fontSize:10,fontWeight:700,color:JB,marginBottom:10,letterSpacing:"0.07em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:5}}>
   <span style={{display:"inline-block",width:3,height:11,background:GOLD,borderRadius:1}}/>{title}
  </div>}
  {children}
 </div>
);

const KPI=({label,value,sub,accent,badge,note,invertLogic})=>(
 <div style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:"12px 14px",borderTop:`3px solid ${accent||JB}`,boxShadow:"0 1px 4px rgba(0,0,0,0.05)",position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:0,right:0,width:36,height:36,borderRadius:"0 10px 0 36px",background:`${accent||JB}10`}}/>
  {badge&&<div style={{position:"absolute",top:6,right:7,background:badge.c,color:"#fff",fontSize:8,fontWeight:700,padding:"1px 5px",borderRadius:20}}>{badge.t}</div>}
  <div style={{color:MUTED,fontSize:9,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2}}>{label}</div>
  <div style={{color:accent||JB,fontSize:18,fontWeight:800,fontFamily:"'Inter',sans-serif"}}>{value}</div>
  {sub&&<div style={{color:MUTED,fontSize:9,marginTop:1}}>{sub}</div>}
  {note&&<div style={{fontSize:8,color:invertLogic?RED:MUTED,fontStyle:"italic",marginTop:1}}>{note}</div>}
 </div>
);

function MetaBar({l,animated,maxOuro}){
 const ok=l.ouro>=l.meta;
 const pct=Math.min((l.ouro/l.meta)*100,100);
 const superou=l.ouro-l.meta;
 return(
  <div style={{marginBottom:12}}>
   <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
    <span style={{fontSize:11,fontWeight:700,color:TEXT}}>{l.n}</span>
    <div style={{display:"flex",gap:5,alignItems:"center"}}>
     <span style={{fontSize:9,color:MUTED}}>{fmtN(l.ouro)}/{fmtN(l.meta)} gr</span>
     <span style={{fontSize:9,padding:"1px 6px",borderRadius:20,fontWeight:700,background:ok?JBL:"#fde8e8",color:ok?JB:RED}}>{ok?"+":""}{fmtN(superou)} gr</span>
     <span style={{fontSize:10,fontWeight:700,color:ok?JB:RED}}>{(l.ouro/l.meta*100).toFixed(1)}%</span>
    </div>
   </div>
   <div style={{position:"relative",background:"#e8f5f0",borderRadius:5,height:18,overflow:"visible",border:`1px solid ${JBL}`}}>
    <div style={{width:animated?`${pct}%`:"0%",height:"100%",background:ok?`linear-gradient(90deg,${JB},${JB2})`:`linear-gradient(90deg,${RED},#e67e73)`,borderRadius:5,transition:"width 1.1s ease",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:6}}>
     <span style={{color:"#fff",fontWeight:700,fontSize:8}}>{fmtN(l.ouro)} gr</span>
    </div>
    {ok&&<div style={{position:"absolute",top:-5,left:`${(l.meta/Math.max(l.ouro,l.meta))*100}%`,transform:"translateX(-50%)",zIndex:10}}>
     <div style={{background:GOLD,color:"#fff",fontSize:7,fontWeight:700,padding:"1px 3px",borderRadius:2,whiteSpace:"nowrap"}}>{fmtN(l.meta)} gr</div>
     <div style={{width:1.5,height:22,background:GOLD,margin:"1px auto 0"}}/>
    </div>}
   </div>
  </div>
 );
}

/* ── RANKING LOJAS ── */
const RANK_CFG=[
 {medal:"🥇",bg:"linear-gradient(135deg,#FFF8E1,#FFF3CD)",border:"#D4AF37",crown:"👑",label:"Campeã"},
 {medal:"🥈",bg:"linear-gradient(135deg,#F5F5F5,#ECECEC)",border:"#9E9E9E",crown:"⭐",label:"Vice"},
 {medal:"🥉",bg:"linear-gradient(135deg,#FFF3E0,#FFE0B2)",border:"#CD7F32",crown:"🌟",label:"3º lugar"},
];
const LOJA_EM={"BOULEVARD":"🏬","LIGHT":"💡","GRAND PLAZA":"🏛️","MAUÁ":"🏢","SÃO BERNARDO":"🏙️","SÃO CAETANO":"🌆","POÇOS CALDAS":"⛲","CUIABÁ":"🌅","SUZANO":"🌿","BRÁS":"🧵","SÃO JOSÉ SC":"🏔️","SANTOS":"⚓","SANTA MARIA":"🌹","PENHA":"🦅","OSASCO":"🏘️"};

function RankingLojas(){
 const [cat,setCat]=useState("valor");
 const lojas=MES_ATUAL.lojas.filter(l=>l.valTotal>0);
 const getRaw=l=>cat==="valor"?l.valTotal:cat==="ouro"?l.ouro:cat==="meta"?l.ouro/l.meta*100:l.ticketOuro;
 const getVal=l=>cat==="valor"?fmt(l.valTotal):cat==="ouro"?fmtN(l.ouro)+" gr":cat==="meta"?(l.ouro/l.meta*100).toFixed(1)+"%":fmt(l.ticketOuro);
 const sorted=cat==="ticket"?[...lojas].sort((a,b)=>a.ticketOuro-b.ticketOuro):[...lojas].sort((a,b)=>getRaw(b)-getRaw(a));
 const maxV=getRaw(sorted[0])||1;
 const top3=sorted.slice(0,3);
 const pod=[top3[1],top3[0],top3[2]];
 const podRk=[2,1,3];
 const [hov,setHov]=useState(null);
 const tsR=id=>({padding:"5px 12px",borderRadius:7,cursor:"pointer",fontSize:10,fontWeight:cat===id?700:500,background:cat===id?JB:"#fff",color:cat===id?"#fff":JB2,border:cat===id?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s"});
 return(
  <div style={{display:"flex",flexDirection:"column",gap:12}}>
   <div style={{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
    {[["valor","💰 Valor"],["ouro","⚜️ Gramas"],["meta","🎯 % Meta"],["ticket","🎫 Ticket"]].map(([id,lb])=><button key={id} style={tsR(id)} onClick={()=>setCat(id)}>{lb}</button>)}
    {cat==="ticket"&&<span style={{marginLeft:"auto",fontSize:9,color:JB,background:JBL,padding:"3px 8px",borderRadius:8,border:`1px solid ${JB2}40`}}>🟢 menor = melhor margem</span>}
   </div>
   <div style={{display:"grid",gridTemplateColumns:"1fr 1.08fr 1fr",gap:10,alignItems:"end"}}>
    {pod.map((l,di)=>{if(!l)return null;
     const rk=podRk[di],cfg=RANK_CFG[rk-1],lift=rk===1?0:rk===2?14:22;
     const pct=(getRaw(l)/maxV*100).toFixed(0);
     const tCol=cat==="ticket"?ticketColor(l.ticketOuro,minT,maxT):"";
     return(
      <div key={l.n} onMouseEnter={()=>setHov(l.n)} onMouseLeave={()=>setHov(null)}
       style={{background:cfg.bg,border:`2px solid ${cfg.border}`,borderRadius:14,padding:"12px 10px",textAlign:"center",boxShadow:hov===l.n?`0 6px 20px ${cfg.border}55`:`0 2px 8px ${cfg.border}25`,transform:hov===l.n?"translateY(-4px)":`translateY(${lift}px)`,transition:"all .22s",cursor:"default"}}>
       <div style={{fontSize:16}}>{cfg.crown}</div>
       <div style={{fontSize:8,fontWeight:700,color:rk===1?"#8B6914":cfg.border,marginBottom:3,letterSpacing:"0.06em",textTransform:"uppercase"}}>{cfg.label}</div>
       <div style={{width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg,${JB},${JB2})`,border:`2.5px solid ${cfg.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,margin:"0 auto 5px"}}>{LOJA_EM[l.n]||"🏪"}</div>
       <div style={{fontFamily:"'Inter',sans-serif",fontSize:13,fontWeight:800,color:TEXT}}>{l.n}</div>
       <div style={{fontSize:8,color:MUTED,marginBottom:5}}>{l.regiao}</div>
       <div style={{fontSize:18,marginBottom:5}}>{cfg.medal}</div>
       <div style={{background:"rgba(255,255,255,0.8)",borderRadius:6,padding:"4px 6px",marginBottom:3}}>
        <div style={{fontSize:13,fontWeight:800,color:cat==="ticket"?tCol:JB}}>{getVal(l)}</div>
        <div style={{fontSize:7,color:MUTED,textTransform:"uppercase",letterSpacing:"0.05em"}}>{["valor","ouro","meta %","ticket"][["valor","ouro","meta","ticket"].indexOf(cat)]}</div>
       </div>
       <div style={{background:"rgba(255,255,255,0.5)",borderRadius:4,height:5,overflow:"hidden"}}>
        <div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${JB},${JB2})`,borderRadius:4}}/>
       </div>
       <div style={{fontSize:7,color:MUTED,marginTop:1}}>{pct}% líder</div>
      </div>
     );
    })}
   </div>
   <Card title={`Ranking — ${["💰 Valor Total","⚜️ Gramas Ouro","🎯 % da Meta","🎫 Ticket Médio"][["valor","ouro","meta","ticket"].indexOf(cat)]} · ${MES_ATUAL.label}`}>
    {cat==="ticket"&&<div style={{fontSize:9,color:TEXT,padding:"5px 8px",background:"#FFF8E1",borderRadius:6,border:`1px solid ${GOLD}40`,marginBottom:8}}>Ticket = valor pago por grama. Quanto menor, melhor a margem de lucro na revenda.</div>}
    <div style={{display:"flex",flexDirection:"column",gap:5}}>
     {sorted.map((l,i)=>{
      const ok=l.ouro>=l.meta;
      const medals=["🥇","🥈","🥉"];
      const barW=cat==="ticket"?(1-(l.ticketOuro-minT)/(maxT-minT))*100:(getRaw(l)/maxV*100);
      const tCol=cat==="ticket"?ticketColor(l.ticketOuro,minT,maxT):`linear-gradient(90deg,${JB},${JB2})`;
      return(
       <div key={l.n} style={{display:"flex",alignItems:"center",gap:7,padding:"7px 9px",borderRadius:8,background:i<3?JBL:"#F7FDFB",border:`1px solid ${i===0?GOLD:i<3?JB2+"40":"#E0EDE6"}`}}>
        <div style={{fontSize:13,width:22,textAlign:"center"}}>{medals[i]||`#${i+1}`}</div>
        <div style={{fontSize:13}}>{LOJA_EM[l.n]||"🏪"}</div>
        <div style={{fontSize:10,fontWeight:700,color:TEXT,flex:1}}>{l.n}</div>
        <div style={{fontSize:9,color:MUTED,minWidth:60}}>{l.regiao}</div>
        <div style={{flex:2,background:"#dceee5",borderRadius:3,height:6,overflow:"hidden"}}>
         <div style={{width:`${barW.toFixed(0)}%`,height:"100%",background:tCol,borderRadius:3}}/>
        </div>
        <div style={{fontSize:11,fontWeight:800,color:cat==="ticket"?tCol:JB,minWidth:80,textAlign:"right"}}>{getVal(l)}</div>
        <span style={{fontSize:8,padding:"1px 5px",borderRadius:10,fontWeight:700,background:ok?JBL:"#fde8e8",color:ok?JB:RED,minWidth:48,textAlign:"center"}}>{(l.ouro/l.meta*100).toFixed(0)}% meta</span>
       </div>
      );
     })}
    </div>
   </Card>
   <FuncDestaqueRede/>
  </div>
 );
}

/* ── FUNCIONÁRIOS ── */
const FUNC_CATS=[
 {id:"ouro",  label:"⚜️ Ouro",   getV:f=>fmtN(f.ouro)+" gr",      getR:f=>f.ouro},
 {id:"valor", label:"💰 Valor",  getV:f=>fmt(f.valor),              getR:f=>f.valor},
 {id:"google",label:"⭐ Google", getV:f=>`${f.gSim||0} aval.`,      getR:f=>f.gSim||0},
];

function Podio({funcs,catId}){
 const cat=FUNC_CATS.find(c=>c.id===catId)||FUNC_CATS[0];
 const sorted=[...funcs].sort((a,b)=>cat.getR(b)-cat.getR(a)).slice(0,3);
 const pod=[sorted[1],sorted[0],sorted[2]];
 const podRk=[2,1,3];
 const maxV=cat.getR(sorted[0])||1;
 const [hov,setHov]=useState(null);
 return(
  <div style={{display:"grid",gridTemplateColumns:sorted.length>=3?"1fr 1.08fr 1fr":sorted.length===2?"1fr 1fr":"1fr",gap:8,alignItems:"end",marginBottom:10}}>
   {pod.map((f,di)=>{if(!f)return null;
    const rk=podRk[di],cfg=RANK_CFG[rk-1],lift=rk===1?0:rk===2?14:22;
    const pct=(cat.getR(f)/maxV*100).toFixed(0);
    return(
     <div key={f.nome} onMouseEnter={()=>setHov(f.nome)} onMouseLeave={()=>setHov(null)}
      style={{background:cfg.bg,border:`2px solid ${cfg.border}`,borderRadius:12,padding:"10px 8px",textAlign:"center",boxShadow:hov===f.nome?`0 6px 18px ${cfg.border}55`:`0 2px 6px ${cfg.border}25`,transform:hov===f.nome?"translateY(-3px)":`translateY(${lift}px)`,transition:"all 0.2s",cursor:"default"}}>
      <div style={{fontSize:14}}>{cfg.crown}</div>
      <div style={{fontSize:7,fontWeight:700,color:rk===1?"#8B6914":cfg.border,marginBottom:2,textTransform:"uppercase"}}>{cfg.label}</div>
      <div style={{width:38,height:38,borderRadius:"50%",background:`linear-gradient(135deg,${JB},${JB2})`,border:`2px solid ${cfg.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,margin:"0 auto 4px"}}>{f.emoji}</div>
      <div style={{fontFamily:"'Inter',sans-serif",fontSize:11,fontWeight:800,color:TEXT}}>{f.nome}</div>
      {f.loja&&<div style={{fontSize:7,color:MUTED,background:JBL,borderRadius:10,padding:"1px 5px",display:"inline-block",marginBottom:3}}>{f.loja}</div>}
      <div style={{fontSize:16,marginBottom:4}}>{cfg.medal}</div>
      <div style={{background:"rgba(255,255,255,0.8)",borderRadius:5,padding:"3px 5px",marginBottom:3}}>
       <div style={{fontSize:11,fontWeight:800,color:catId==="google"?(f.gSim||0)>0?JB:MUTED:JB}}>{cat.getV(f)}</div>
       {catId==="google"&&(f.gSim||0)+(f.gNao||0)>0&&<div style={{fontSize:8,color:MUTED}}>{Math.round((f.gSim||0)/((f.gSim||0)+(f.gNao||0))*100)}% conv.</div>}
      </div>
      {catId==="google"&&(f.gSim||0)+(f.gNao||0)>0&&<div style={{display:"flex",height:5,borderRadius:3,overflow:"hidden",marginBottom:2}}>
       <div style={{flex:f.gSim||0,background:JB,borderRadius:"3px 0 0 3px"}}/>
       <div style={{flex:f.gNao||0,background:"#e0e0e0",borderRadius:"0 3px 3px 0"}}/>
      </div>}
      {catId!=="google"&&<div style={{background:"rgba(255,255,255,0.5)",borderRadius:3,height:4,overflow:"hidden"}}>
       <div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${JB},${JB2})`,borderRadius:3}}/>
      </div>}
     </div>
    );
   })}
  </div>
 );
}

function FuncDestaqueRede(){
 const [catId,setCatId]=useState("ouro");
 const cat=FUNC_CATS.find(c=>c.id===catId)||FUNC_CATS[0];
 const sorted=[...allFuncsMar].sort((a,b)=>cat.getR(b)-cat.getR(a));
 const top=sorted.slice(0,8);
 const maxV=cat.getR(top[0])||1;
 const ts=id=>({padding:"5px 10px",borderRadius:7,cursor:"pointer",fontSize:10,fontWeight:catId===id?700:500,background:catId===id?JB:"#fff",color:catId===id?"#fff":JB2,border:catId===id?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s"});
 return(
  <Card title={`🌟 Funcionário Destaque da Rede — ${MES_ATUAL.label}`}>
   <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap",alignItems:"center"}}>
    {FUNC_CATS.map(c=><button key={c.id} style={ts(c.id)} onClick={()=>setCatId(c.id)}>{c.label}</button>)}
    {(()=>{const totSim=allFuncsMar.reduce((s,f)=>s+(f.gSim||0),0);const totNao=allFuncsMar.reduce((s,f)=>s+(f.gNao||0),0);const conv=totSim+totNao>0?Math.round(totSim/(totSim+totNao)*100):0;return(
     <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:8,padding:"4px 10px",background:JBL,borderRadius:8,border:`1px solid ${JB2}40`}}>
      <div style={{display:"flex",height:7,width:60,borderRadius:3,overflow:"hidden"}}>
       <div style={{flex:totSim,background:JB}}/><div style={{flex:totNao,background:"#e0e0e0"}}/>
      </div>
      <span style={{fontSize:10,color:JB,fontWeight:700}}>⭐ {totSim} aval. Google</span>
      <span style={{fontSize:10,fontWeight:800,color:conv>=60?JB:RED}}>{conv}% conv.</span>
     </div>
    );})()}
   </div>
   <Podio funcs={allFuncsMar} catId={catId}/>
   <div style={{display:"flex",flexDirection:"column",gap:4}}>
    {top.map((f,i)=>{
     const medals=["🥇","🥈","🥉"];
     const barW=(cat.getR(f)/maxV*100);
     return(
      <div key={f.nome+f.loja} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",borderRadius:7,background:i<3?JBL:"#F7FDFB",border:`1px solid ${i===0?GOLD:i<3?JB2+"40":"#E0EDE6"}`}}>
       <div style={{fontSize:12,width:20,textAlign:"center"}}>{medals[i]||`#${i+1}`}</div>
       <div style={{fontSize:13}}>{f.emoji}</div>
       <div style={{flex:1,minWidth:0}}>
        <div style={{fontWeight:700,color:TEXT,fontSize:10}}>{f.nome}</div>
        <div style={{display:"flex",alignItems:"center",gap:4,marginTop:1}}>
         <span style={{fontSize:8,color:MUTED,background:JBL,padding:"0px 4px",borderRadius:8,whiteSpace:"nowrap"}}>{LOJA_EM[f.loja]||"🏪"} {f.loja}</span>
         {catId==="google"&&(f.gSim||0)+(f.gNao||0)>0?<div style={{display:"flex",flex:1,height:5,borderRadius:3,overflow:"hidden"}}>
          <div style={{flex:f.gSim||0,background:JB}}/><div style={{flex:f.gNao||0,background:"#e0e0e0"}}/>
         </div>:<div style={{flex:1,background:"#dceee5",borderRadius:3,height:5,overflow:"hidden"}}>
          <div style={{width:`${barW.toFixed(0)}%`,height:"100%",background:`linear-gradient(90deg,${JB},${JB2})`,borderRadius:3}}/>
         </div>}
        </div>
       </div>
       <div style={{textAlign:"right",flexShrink:0}}>
        <div style={{fontWeight:800,color:JB,fontSize:11}}>{cat.getV(f)}</div>
       </div>
      </div>
     );
    })}
   </div>
  </Card>
 );
}

function FuncLoja({funcs}){
 const [catId,setCatId]=useState("ouro");
 const cat=FUNC_CATS.find(c=>c.id===catId)||FUNC_CATS[0];
 const sorted=[...funcs].filter(f=>cat.getR(f)>0).sort((a,b)=>cat.getR(b)-cat.getR(a));
 const maxV=cat.getR(sorted[0])||1;
 const ts=id=>({padding:"4px 9px",borderRadius:6,cursor:"pointer",fontSize:9,fontWeight:catId===id?700:500,background:catId===id?JB:"#fff",color:catId===id?"#fff":JB2,border:catId===id?`1px solid ${GOLD}`:`1px solid ${GOLD}50`});
 return(
  <div>
   <div style={{display:"flex",gap:5,marginBottom:8}}>
    {FUNC_CATS.map(c=><button key={c.id} style={ts(c.id)} onClick={()=>setCatId(c.id)}>{c.label}</button>)}
   </div>
   {sorted.length>=2&&<Podio funcs={sorted} catId={catId}/>}
   <div style={{display:"flex",flexDirection:"column",gap:4}}>
    {sorted.map((f,i)=>{
     const medals=["🥇","🥈","🥉"];
     const barW=(cat.getR(f)/maxV*100);
     return(
      <div key={f.nome} style={{display:"flex",alignItems:"center",gap:6,padding:"5px 8px",borderRadius:7,background:i<3?JBL:"#F7FDFB",border:`1px solid ${i===0?GOLD:i<3?JB2+"40":"#E0EDE6"}`}}>
       <div style={{fontSize:12,width:20,textAlign:"center"}}>{medals[i]||`#${i+1}`}</div>
       <div style={{fontSize:13}}>{f.emoji}</div>
       <div style={{flex:1}}>
        <div style={{fontWeight:700,color:TEXT,fontSize:10}}>{f.nome}</div>
        {catId==="google"&&(f.gSim||0)+(f.gNao||0)>0?<div style={{display:"flex",height:5,borderRadius:3,overflow:"hidden",marginTop:2}}>
         <div style={{flex:f.gSim||0,background:JB}}/><div style={{flex:f.gNao||0,background:"#e0e0e0"}}/>
        </div>:<div style={{flex:1,background:"#dceee5",borderRadius:3,height:5,overflow:"hidden",marginTop:2}}>
         <div style={{width:`${barW.toFixed(0)}%`,height:"100%",background:`linear-gradient(90deg,${JB},${JB2})`,borderRadius:3}}/>
        </div>}
        {catId==="google"&&(f.gSim||0)+(f.gNao||0)>0&&<div style={{fontSize:8,color:MUTED,marginTop:1}}>{f.gSim||0} aval · {(f.gSim||0)+(f.gNao||0)>0?Math.round((f.gSim||0)/((f.gSim||0)+(f.gNao||0))*100):0}% conv.</div>}
       </div>
       <div style={{fontWeight:800,color:JB,fontSize:11,textAlign:"right"}}>{cat.getV(f)}</div>
      </div>
     );
    })}
   </div>
  </div>
 );
}

/* ── COMPARATIVO ── */
function TabComparativo(){
 const crescVal=calcPct(MES_ATUAL.totalVal,MES_ANT?.totalVal);
 const crescOuro=calcPct(MES_ATUAL.totalOuro,MES_ANT?.totalOuro);
 const evolucao=MESES.map(m=>({mes:m.short,val:m.totalVal,ouro:m.totalOuro,lojas:m.nLojas}));
 const lojaComp=MES_ATUAL.lojas.map(lm=>{
  const lf=MES_ANT?.lojas.find(x=>x.n===lm.n);
  return{...lm,valF:lf?.valTotal||0,ouroF:lf?.ouro||0,isNew:!lf||lf.valTotal===0};
 }).sort((a,b)=>b.valTotal-a.valTotal).filter(l=>l.valTotal>0||l.valF>0);
 const compData=lojaComp.map(l=>({n:l.n.split(' ')[0],mar:l.valTotal,fev:l.valF}));
 return(
  <div style={{display:"flex",flexDirection:"column",gap:12}}>
   <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
    {[
     {label:`Valor Total — ${MES_ATUAL.short}`,val:fmt(MES_ATUAL.totalVal),sub:MES_ANT?`${MES_ANT.short}: ${fmt(MES_ANT.totalVal)}`:null,accent:JB,arr:MES_ANT?arrowFn(MES_ATUAL.totalVal,MES_ANT.totalVal):null},
     {label:`Gramas Ouro — ${MES_ATUAL.short}`,val:fmtN(MES_ATUAL.totalOuro)+" gr",sub:MES_ANT?`${MES_ANT.short}: ${fmtN(MES_ANT.totalOuro)} gr`:null,accent:JB2,arr:MES_ANT?arrowFn(MES_ATUAL.totalOuro,MES_ANT.totalOuro):null},
     {label:"Lojas Ativas",val:`${MES_ATUAL.nLojas} lojas`,sub:MES_ANT?`${MES_ANT.short}: ${MES_ANT.nLojas} lojas`:null,accent:GOLD,arr:MES_ANT?arrowFn(MES_ATUAL.nLojas,MES_ANT.nLojas):null},
    ].map((k,i)=>(
     <div key={i} style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:"12px 14px",borderTop:`3px solid ${k.accent}`,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>
      <div style={{fontSize:9,color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2}}>{k.label}</div>
      <div style={{fontSize:17,fontWeight:800,color:k.accent,fontFamily:"'Inter',sans-serif"}}>{k.val}</div>
      {k.sub&&<div style={{fontSize:9,color:MUTED,marginTop:1,display:"flex",alignItems:"center",gap:3}}>{k.sub}{k.arr&&<span style={{color:k.arr.color,fontWeight:700,fontSize:9}}>{k.arr.icon}{k.arr.txt}</span>}</div>}
     </div>
    ))}
    <div style={{background:`linear-gradient(135deg,${JB},${JB2})`,borderRadius:10,padding:"12px 14px",color:"#fff",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}>
     <div style={{fontSize:9,color:"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2}}>{MES_ANT?`Crescimento ${MES_ANT.short}→${MES_ATUAL.short}`:"Mês Atual"}</div>
     <div style={{fontSize:24,fontWeight:900,fontFamily:"'Inter',sans-serif",color:GOLD2}}>{MES_ANT?`+${crescVal}%`:MES_ATUAL.short}</div>
     {MES_ANT&&<div style={{fontSize:9,color:"rgba(255,255,255,0.7)"}}>+R$ {fmtN((MES_ATUAL.totalVal-MES_ANT.totalVal)/1000)}k em valor</div>}
    </div>
   </div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1.1fr 1fr",gap:12}}>
    <Card title="📈 Evolução Mensal — Valor Total">
     <div style={{fontSize:9,color:MUTED,marginBottom:6,padding:"4px 7px",background:"#FFF8E1",borderRadius:5,border:`1px solid ${GOLD}40`}}>📌 Gráfico anual — novos meses adicionados automaticamente</div>
     <ResponsiveContainer width="100%" height={170}>
      <LineChart data={evolucao}>
       <CartesianGrid strokeDasharray="3 3" stroke="#E0F0E8"/>
       <XAxis dataKey="mes" tick={{fill:MUTED,fontSize:10}} tickLine={false}/>
       <YAxis tick={{fill:MUTED,fontSize:10}} tickLine={false} axisLine={false} tickFormatter={v=>`R$${Math.round(v/1000)}k`}/>
       <Tooltip formatter={v=>[fmt(v),"Valor"]}/>
       <Line type="monotone" dataKey="val" stroke={JB} strokeWidth={3} dot={{r:6,fill:JB,stroke:"#fff",strokeWidth:2}} activeDot={{r:8,fill:GOLD}}/>
      </LineChart>
     </ResponsiveContainer>
    </Card>
    <Card title="⚜️ Evolução — Gramas de Ouro">
     <ResponsiveContainer width="100%" height={170}>
      <BarChart data={evolucao}>
       <CartesianGrid strokeDasharray="3 3" stroke="#E0F0E8"/>
       <XAxis dataKey="mes" tick={{fill:MUTED,fontSize:10}} tickLine={false}/>
       <YAxis tick={{fill:MUTED,fontSize:10}} tickLine={false} axisLine={false} tickFormatter={v=>v+"gr"}/>
       <Tooltip formatter={v=>[fmtN(v)+" gr","Ouro"]}/>
       <Bar dataKey="ouro" radius={[4,4,0,0]}>
        {evolucao.map((_,i)=><Cell key={i} fill={i===evolucao.length-1?JB:JBL} stroke={i===evolucao.length-1?GOLD:"none"} strokeWidth={1.5}/>)}
       </Bar>
      </BarChart>
     </ResponsiveContainer>
    </Card>
   </div>

   <GraficoDiario/>
   <Card title={`🏪 Comparativo por Loja${MES_ANT?` — ${MES_ANT.short} vs ${MES_ATUAL.short}`:""}`}>
    <ResponsiveContainer width="100%" height={250}>
     <BarChart data={compData} margin={{left:0}}>
      <CartesianGrid strokeDasharray="3 3" stroke="#E0F0E8"/>
      <XAxis dataKey="n" tick={{fill:TEXT,fontSize:9}} tickLine={false} angle={-20} textAnchor="end" height={36}/>
      <YAxis tick={{fill:MUTED,fontSize:9}} tickLine={false} axisLine={false} tickFormatter={v=>`R$${Math.round(v/1000)}k`}/>
      <Tooltip formatter={v=>[fmt(v)]}/>
      {MES_ANT&&<Bar dataKey="fev" name={MES_ANT.short} fill={JBL} stroke={JB2} strokeWidth={1} radius={[3,3,0,0]}/>}
      <Bar dataKey="mar" name={MES_ATUAL.short} fill={JB} radius={[3,3,0,0]}/>
     </BarChart>
    </ResponsiveContainer>
   </Card>
   <Card title="📊 Crescimento por Loja">
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
     {lojaComp.map((l,i)=>{
      const crescL=l.valF>0?calcPct(l.valTotal,l.valF):null;
      return(
       <div key={l.n} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",borderRadius:7,background:i%2===0?"#F7FDFB":"#fff",border:`1px solid ${JBL}`}}>
        <div style={{fontSize:9,fontWeight:700,color:TEXT,flex:1}}>{l.n}{l.isNew&&<span style={{fontSize:7,background:GOLD,color:"#fff",borderRadius:8,padding:"0px 4px",marginLeft:3}}>NOVA</span>}</div>
        <div style={{textAlign:"right",minWidth:65}}>
         <div style={{fontSize:10,fontWeight:700,color:JB}}>{fmt(l.valTotal)}</div>
         {l.valF>0&&<div style={{fontSize:8,color:MUTED}}>{fmt(l.valF)}</div>}
        </div>
        <div style={{minWidth:55,textAlign:"center"}}>
         {crescL!==null?<span style={{fontSize:9,fontWeight:700,color:parseFloat(crescL)>=0?JB:RED,background:(parseFloat(crescL)>=0?JB:RED)+"15",padding:"1px 5px",borderRadius:8}}>{parseFloat(crescL)>=0?"▲":"▼"} {Math.abs(crescL)}%</span>:<span style={{fontSize:8,color:MUTED}}>Nova</span>}
        </div>
       </div>
      );
     })}
    </div>
   </Card>
  </div>
 );
}

/* ── FUNIL CRM ── */
function TabFunil(){
 const [mesIdx,setMesIdx]=useState(MESES.length-1);
 const D=MESES[mesIdx];
 const Dp=mesIdx>0?MESES[mesIdx-1]:null;
 

 const motivosData=Object.entries(D.motivos).sort((a,b)=>b[1]-a[1]).map(([k,v])=>({n:k,v}));
 const totalM=motivosData.reduce((s,m)=>s+m.v,0);
 const sugestoes=[
  {icon:"📚",motivo:"Sem Interesse / Cotação Baixa",acao:"Conteúdo educativo sobre valorização do ouro. Nutrir com comparativos de mercado.",cor:JB},
  {icon:"⚡",motivo:"Vendeu para Concorrente",acao:"Protocolo de urgência: resposta em até 5 min. Avaliação instantânea e transparência.",cor:RED},
  {icon:"⏰",motivo:"Quer Vender Mais para Frente",acao:"Nutrição automática com alertas de cotação e remarketing periódico.",cor:AMBAR},
  {icon:"📍",motivo:"Mora Longe",acao:"Mapear CEPs e criar rotas de atendimento externo. Avaliar novas unidades.",cor:GOLD},
  {icon:"💡",motivo:"Não Fechou por Valor",acao:"Treinar equipe em argumentação de valor. Criar política de contraoferta.",cor:JB2},
  {icon:"🤖",motivo:"Automação Geral",acao:"Follow-up em 24h. 5 contatos antes de arquivar. Conversão pode dobrar com nutrição.",cor:"#2D9E87"},
 ];
 const STG_L=[["Leads Novos","🎯",JB],["Leads Delegados","📋",JB],["Em Atendimento","💬",JB2],["1º Contato","📞",JB2],["2º Contato","📞",JB2],["3º Contato","📞","#2D9E87"],["Negociação","🤝",AMBAR],["Remarketing","🔄",AMBAR],["Agendamento","📅",GOLD],["Total Compras","✅",JB]];

 return(
  <div style={{display:"flex",flexDirection:"column",gap:12}}>
   <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
    {MESES.map((m,i)=><button key={m.id} onClick={()=>setMesIdx(i)} style={{padding:"5px 12px",borderRadius:7,cursor:"pointer",fontSize:10,fontWeight:mesIdx===i?700:400,background:mesIdx===i?JB:"#fff",color:mesIdx===i?"#fff":JB2,border:mesIdx===i?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s"}}>{m.label}</button>)}
    <div style={{marginLeft:"auto",display:"flex",gap:14,fontSize:11,color:MUTED}}>
     <span>Conversão: <strong style={{color:JB}}>{((D.funil["Total Compras"]/D.funil["Leads Novos"])*100).toFixed(2)}%</strong></span>
     <span>Leads: <strong style={{color:JB}}>{D.funil["Leads Novos"]}</strong></span>
     {Dp&&<span style={{color:arrowFn(D.funil["Leads Novos"],Dp.funil["Leads Novos"]).color}}>{arrowFn(D.funil["Leads Novos"],Dp.funil["Leads Novos"]).icon} vs {Dp.short}</span>}
    </div>
   </div>
   <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>

    {/* ── FUNIL VISUAL TRAPÉZIO ── */}
    <Card title={`🔽 Funil Visual — ${D.label}`}>
     <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:0,padding:"4px 0"}}>
      {(()=>{
       const CRS=[["#6C63FF","#8B5CF6"],["#3B82F6","#60A5FA"],["#10B981","#34D399"],["#F59E0B","#FCD34D"],["#F97316","#FB923C"],["#EF4444","#F87171"],["#EC4899","#F472B6"],["#8B5CF6","#A78BFA"],["#059669","#10B981"]];
       const stages=["Leads Novos","Leads Delegados","Em Atendimento","1º Contato","2º Contato","3º Contato","Negociação","Remarketing","Total Compras"].map((s,i)=>({s,cor:CRS[i]}));
       const maxV2=D.funil[stages[0].s]||1;
       return stages.map((f,i)=>{
        const val=D.funil[f.s]||0;
        const pct=(val/maxV2);
        const w=30+70*pct;
        const valP=Dp?Dp.funil[f.s]||0:null;
        const diff=valP?val-valP:null;
        return(
         <div key={f.s} style={{width:"100%",display:"flex",justifyContent:"center",marginBottom:2}}>
          <div style={{width:`${w}%`,background:`linear-gradient(135deg,${f.cor[0]},${f.cor[1]})`,borderRadius:4,padding:"5px 8px",display:"flex",alignItems:"center",justifyContent:"space-between",minHeight:26,boxShadow:"0 2px 6px rgba(0,0,0,0.18)",transition:"width .3s ease"}}>
           <span style={{fontSize:8,color:"rgba(255,255,255,0.9)",fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"55%"}}>{f.s}</span>
           <div style={{flexShrink:0,display:"flex",alignItems:"center",gap:3}}>
            <span style={{fontSize:11,fontWeight:800,color:"#fff"}}>{val.toLocaleString("pt-BR")}</span>
            {diff!==null&&<span style={{fontSize:8,color:diff>=0?"#bbf7d0":"#fecaca"}}>{diff>=0?"▲":"▼"}{Math.abs(diff)}</span>}
           </div>
          </div>
         </div>
        );
       });
      })()}
     </div>
     <div style={{marginTop:8,padding:"6px 10px",background:JBL,borderRadius:7,border:`1px solid ${JB2}30`,display:"flex",justifyContent:"space-between",fontSize:10}}>
      <span>Conversão: <strong style={{color:JB}}>{((D.funil["Total Compras"]/D.funil["Leads Novos"])*100).toFixed(2)}%</strong></span>
      <span>Compras: <strong style={{color:JB}}>{D.funil["Total Compras"]}</strong></span>
     </div>
    </Card>


    
    {/* ── FUNIL BARRAS ── */}
    <Card title="📊 Etapas Detalhadas">
     <div style={{display:"flex",flexDirection:"column",gap:4}}>
      {(()=>{const mxVal=Math.max(...STG_L.map(([s])=>D.funil[s]||0));return STG_L.map(([s,icon,cor])=>{
       const val=D.funil[s]||0;
       const valP=Dp?Dp.funil[s]||0:null;
       const w=Math.max((val/mxVal)*100,2);
       const a=valP?arrowFn(val,valP):null;
       return(
        <div key={s} style={{display:"flex",alignItems:"center",gap:5}}>
         <div style={{width:105,fontSize:9,color:TEXT,textAlign:"right",flexShrink:0}}>{icon} {s}</div>
         <div style={{flex:1,background:"#F0FAF6",borderRadius:4,height:24,overflow:"hidden"}}>
          <div style={{width:`${w}%`,height:"100%",background:cor,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:6,transition:"width .8s ease"}}>
           <span style={{color:"#fff",fontWeight:700,fontSize:10}}>{val.toLocaleString("pt-BR")}</span>
          </div>
         </div>
         {a&&<span style={{fontSize:8,fontWeight:700,color:a.color,width:40,textAlign:"right",flexShrink:0}}>{a.icon}{a.txt}</span>}
        </div>
       );
      })})()}
     </div>
     <div style={{marginTop:8,padding:"6px 9px",background:JBL,borderRadius:7,border:`1px solid ${JB2}30`,display:"flex",justifyContent:"space-between",fontSize:10}}>
      <span>Leads→Compra: <strong style={{color:JB}}>{((D.funil["Total Compras"]/D.funil["Leads Novos"])*100).toFixed(2)}%</strong></span>
      <span>Finalizados: <strong style={{color:JB}}>{D.funil["Atend. Finalizados"]}</strong></span>
      <span>Remarketing: <strong style={{color:AMBAR}}>{D.funil["Remarketing"]}</strong></span>
     </div>
    </Card>

{/* ── MOTIVOS ── */}
    <div style={{display:"flex",flexDirection:"column",gap:10}}>
     <Card title="❌ Motivos de Perda">
      <div style={{display:"flex",flexDirection:"column",gap:5}}>
       {motivosData.map((m,i)=>{
        const w=(m.v/motivosData[0].v*100).toFixed(0);
        const prevV=Dp?Dp.motivos[m.n]:null;
        const a=prevV?arrowFn(m.v,prevV,true):null;
        return(
         <div key={m.n}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:1}}>
           <span style={{fontSize:9,color:TEXT}}>{m.n}</span>
           <div style={{display:"flex",alignItems:"center",gap:3}}>
            <span style={{fontSize:9,fontWeight:700,color:RED}}>{m.v}</span>
            <span style={{fontSize:8,color:MUTED}}>{((m.v/totalM)*100).toFixed(0)}%</span>
            {a&&<span style={{fontSize:8,fontWeight:700,color:a.color}}>{a.icon}</span>}
           </div>
          </div>
          <div style={{background:"#fde8e8",borderRadius:3,height:6,overflow:"hidden"}}>
           <div style={{width:`${w}%`,height:"100%",background:i===0?RED:"#e88080",borderRadius:3}}/>
          </div>
         </div>
        );
       })}
      </div>
      <div style={{marginTop:6,fontSize:9,color:MUTED,textAlign:"right"}}>Total: <strong style={{color:RED}}>{totalM}</strong></div>
     </Card>
    </div>
   </div>
   <Card title="💡 Plano de Ação">
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7}}>
     {sugestoes.map((s,i)=>(
      <div key={i} style={{padding:"8px 9px",background:JBL,borderRadius:7,borderLeft:`3px solid ${s.cor}`}}>
       <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:3}}>
        <span style={{fontSize:13}}>{s.icon}</span>
        <div style={{fontSize:8,fontWeight:700,color:s.cor}}>{s.motivo}</div>
       </div>
       <div style={{fontSize:9,color:TEXT,lineHeight:1.4}}>{s.acao}</div>
      </div>
     ))}
    </div>
   </Card>
  </div>
 );
}

/* ── MARKETING ── */
function TabMarketing(){
 const [mesIdx,setMesIdx]=useState(MESES.length-1);
 const D=MESES[mesIdx];
 const Dp=mesIdx>0?MESES[mesIdx-1]:null;
 const mk=D.marketing,mkP=Dp?.marketing;
 const conv=((mk.compras/mk.disparados)*100).toFixed(2);
 const evolMk=MESES.map(m=>({mes:m.short,disparados:m.marketing.disparados,compras:m.marketing.compras,gramas:m.marketing.gramas,valor:m.marketing.valor}));
 const metrics=[
  {label:"Disparos",fev:mkP?.disparados,mar:mk.disparados,icon:"📤",accent:BLUE||JB},
  {label:"Compras",fev:mkP?.compras,mar:mk.compras,icon:"✅",accent:JB},
  {label:"Gramas Ouro",fev:mkP?.gramas,mar:mk.gramas,icon:"⚜️",accent:JB2,suffix:" gr"},
  {label:"Valor em Compras",fev:mkP?.valor,mar:mk.valor,icon:"💰",accent:GOLD,isCurr:true},
  {label:"Taxa de Conversão",fev:mkP?(mkP.compras/mkP.disparados*100):null,mar:parseFloat(conv),icon:"🎯",accent:JB,suffix:"%"},
  {label:"Valor por Disparo",fev:mkP?Math.round(mkP.valor/mkP.disparados):null,mar:Math.round(mk.valor/mk.disparados),icon:"📊",accent:JB2,isCurr:true},
 ];
 return(
  <div style={{display:"flex",flexDirection:"column",gap:12}}>
   <div style={{display:"flex",gap:6,marginBottom:2}}>
    {MESES.map((m,i)=><button key={m.id} onClick={()=>setMesIdx(i)} style={{padding:"5px 12px",borderRadius:7,cursor:"pointer",fontSize:10,fontWeight:mesIdx===i?700:400,background:mesIdx===i?JB:"#fff",color:mesIdx===i?"#fff":JB2,border:mesIdx===i?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s"}}>{m.label}</button>)}
   </div>
   <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
    {metrics.map((m,i)=>{
     const a=m.fev?arrowFn(m.mar,m.fev):null;
     return(
      <div key={i} style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:"12px 14px",borderLeft:`4px solid ${m.accent}`,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>
       <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div>
         <div style={{fontSize:9,color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:3}}>{m.label}</div>
         <div style={{fontSize:19,fontWeight:800,color:m.accent,fontFamily:"'Inter',sans-serif"}}>{m.isCurr?fmt(m.mar):fmtN(m.mar)}{m.suffix||""}</div>
         {m.fev&&<div style={{fontSize:9,color:MUTED,marginTop:1}}>{Dp?.short}: {m.isCurr?fmt(m.fev):fmtN(m.fev)}{m.suffix||""}</div>}
        </div>
        <div style={{textAlign:"center"}}>
         <div style={{fontSize:18}}>{m.icon}</div>
         {a&&<div style={{fontSize:9,fontWeight:700,color:a.color,marginTop:3}}>{a.icon} {a.txt}</div>}
        </div>
       </div>
      </div>
     );
    })}
   </div>
   <div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:12}}>
    <Card title="📤 Disparos vs Compras">
     <ResponsiveContainer width="100%" height={190}>
      <BarChart data={evolMk}>
       <CartesianGrid strokeDasharray="3 3" stroke="#E0F0E8"/>
       <XAxis dataKey="mes" tick={{fill:MUTED,fontSize:10}} tickLine={false}/>
       <YAxis yAxisId="left" tick={{fill:MUTED,fontSize:10}} tickLine={false} axisLine={false}/>
       <YAxis yAxisId="right" orientation="right" tick={{fill:AMBAR,fontSize:10}} tickLine={false} axisLine={false}/>
       <Tooltip/>
       <Bar yAxisId="left" dataKey="disparados" name="Disparados" fill={JBL} stroke={JB2} strokeWidth={1} radius={[4,4,0,0]}/>
       <Bar yAxisId="right" dataKey="compras" name="Compras" fill={GOLD} radius={[4,4,0,0]}/>
      </BarChart>
     </ResponsiveContainer>
    </Card>
    <Card title="💰 Valor Gerado pelo Marketing">
     <ResponsiveContainer width="100%" height={190}>
      <LineChart data={evolMk}>
       <CartesianGrid strokeDasharray="3 3" stroke="#E0F0E8"/>
       <XAxis dataKey="mes" tick={{fill:MUTED,fontSize:10}} tickLine={false}/>
       <YAxis tick={{fill:MUTED,fontSize:10}} tickLine={false} axisLine={false} tickFormatter={v=>`R$${Math.round(v/1000)}k`}/>
       <Tooltip formatter={v=>[fmt(v),"Valor"]}/>
       <Line type="monotone" dataKey="valor" stroke={GOLD} strokeWidth={3} dot={{r:6,fill:GOLD,stroke:"#fff",strokeWidth:2}}/>
      </LineChart>
     </ResponsiveContainer>
     {Dp&&<div style={{marginTop:6,padding:"5px 8px",background:"#FFF8E1",borderRadius:6,border:`1px solid ${GOLD}40`,fontSize:9,color:TEXT}}>
      ROI {D.short} vs {Dp.short}: <strong style={{color:GOLD}}>+{calcPct(mk.valor,mkP.valor)}%</strong> — de {fmt(mkP.valor)} para {fmt(mk.valor)}
     </div>}
    </Card>
   </div>
  </div>
 );
}

/* ── TEMPO RESPOSTA ── */
function TabTempo(){
 const [mesIdx,setMesIdx]=useState(MESES.length-1);
 const D=MESES[mesIdx];
 const Dp=mesIdx>0?MESES[mesIdx-1]:null;
 const tempoData=Object.entries(D.tempo).filter(([,v])=>v>0).sort((a,b)=>a[1]-b[1]).map(([loja,min])=>{
  const fevMin=Dp?Dp.tempo[loja]||0:0;
  const cor=min<=5?JB:min<=15?GOLD:min<=30?AMBAR:RED;
  const status=min<=5?"🟢":min<=15?"🟡":min<=30?"🟠":"🔴";
  return{loja,min,fevMin,cor,status};
 });
 const media=(tempoData.reduce((s,t)=>s+t.min,0)/tempoData.length||0).toFixed(0);
 const criticos=tempoData.filter(t=>t.min>30).length;
 return(
  <div style={{display:"flex",flexDirection:"column",gap:12}}>
   <div style={{display:"flex",gap:6,marginBottom:2}}>
    {MESES.map((m,i)=><button key={m.id} onClick={()=>setMesIdx(i)} style={{padding:"5px 12px",borderRadius:7,cursor:"pointer",fontSize:10,fontWeight:mesIdx===i?700:400,background:mesIdx===i?JB:"#fff",color:mesIdx===i?"#fff":JB2,border:mesIdx===i?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s"}}>{m.label}</button>)}
   </div>
   <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
    {[
     {label:`Média Geral — ${D.short}`,val:media+" min",accent:AMBAR,sub:"Tempo médio de resposta"},
     {label:"Mais Rápida",val:`${tempoData[0]?.loja} ${tempoData[0]?.min}m`,accent:JB2,sub:"Melhor SLA"},
     {label:"Excelentes ≤5 min",val:`${tempoData.filter(t=>t.min<=5).length} lojas`,accent:JB,sub:"SLA ideal"},
     {label:"Críticas >30 min",val:`${criticos} loja${criticos!==1?"s":""}`,accent:criticos>0?RED:JB,sub:criticos>0?"Ação imediata":"Sem críticas"},
    ].map((k,i)=>(
     <div key={i} style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:"12px 14px",borderTop:`3px solid ${k.accent}`,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>
      <div style={{fontSize:9,color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2}}>{k.label}</div>
      <div style={{fontSize:16,fontWeight:800,color:k.accent,fontFamily:"'Inter',sans-serif"}}>{k.val}</div>
      <div style={{fontSize:9,color:MUTED,marginTop:1}}>{k.sub}</div>
     </div>
    ))}
   </div>
   <div style={{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:12}}>
    <Card title={`⏱️ Tempo de Resposta por Unidade — ${D.label}`}>
     <div style={{fontSize:9,color:MUTED,marginBottom:8,padding:"4px 7px",background:"#FFF8E1",borderRadius:5,border:`1px solid ${GOLD}40`}}>🟢 ≤5 min: Excelente &nbsp;|&nbsp; 🟡 6–15: Atenção &nbsp;|&nbsp; 🟠 16–30: Alto &nbsp;|&nbsp; 🔴 >30: Crítico</div>
     <div style={{display:"flex",flexDirection:"column",gap:6}}>
      {tempoData.map((t,i)=>{
       const maxMin=Math.max(...tempoData.map(x=>x.min));
       const barW=Math.min((t.min/maxMin)*100,100);
       const melhorou=t.fevMin>0&&t.min<t.fevMin;
       const piorou=t.fevMin>0&&t.min>t.fevMin;
       return(
        <div key={t.loja}>
         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:1}}>
          <div style={{display:"flex",alignItems:"center",gap:4}}>
           <span style={{fontSize:10}}>{t.status}</span>
           <span style={{fontSize:10,fontWeight:700,color:TEXT}}>{t.loja}</span>
           {melhorou&&Dp&&<span style={{fontSize:7,color:JB,background:JBL,padding:"0px 4px",borderRadius:7}}>▼ Melhorou</span>}
           {piorou&&Dp&&<span style={{fontSize:7,color:RED,background:"#fde8e8",padding:"0px 4px",borderRadius:7}}>▲ Piorou</span>}
          </div>
          <div style={{display:"flex",gap:6,fontSize:9}}>
           {t.fevMin>0&&Dp&&<span style={{color:MUTED}}>{Dp.short}: {t.fevMin}m</span>}
           <span style={{fontWeight:700,color:t.cor}}>{t.min} min</span>
          </div>
         </div>
         <div style={{background:"#f0f9f5",borderRadius:3,height:9,overflow:"hidden"}}>
          <div style={{width:`${barW}%`,height:"100%",background:t.cor,borderRadius:3}}/>
         </div>
        </div>
       );
      })}
     </div>
    </Card>
    <div style={{display:"flex",flexDirection:"column",gap:10}}>
     {Dp&&<Card title={`📊 Comparativo ${Dp.short} vs ${D.short}`}>
      <ResponsiveContainer width="100%" height={180}>
       <BarChart data={tempoData.filter(t=>t.fevMin>0)} layout="vertical" margin={{left:5}}>
        <XAxis type="number" tick={{fill:MUTED,fontSize:9}} tickLine={false} tickFormatter={v=>v+"m"}/>
        <YAxis type="category" dataKey="loja" tick={{fill:TEXT,fontSize:9}} tickLine={false} width={80}/>
        <Tooltip formatter={v=>v+" min"}/>
        <Bar dataKey="fevMin" name={Dp.short} fill={JBL} stroke={JB2} strokeWidth={1} radius={[0,3,3,0]}/>
        <Bar dataKey="min" name={D.short} radius={[0,3,3,0]}>
         {tempoData.filter(t=>t.fevMin>0).map((t,i)=><Cell key={i} fill={t.cor}/>)}
        </Bar>
       </BarChart>
      </ResponsiveContainer>
     </Card>}
     <Card title="🎯 SLA — Metas">
      {[
       {meta:"Meta ideal",val:"≤ 5 min",ok:parseInt(media)<=5,desc:"Resposta imediata"},
       {meta:"Meta aceitável",val:"≤ 15 min",ok:parseInt(media)<=15,desc:"Até 15 minutos"},
       {meta:`Média ${D.short}`,val:`${media} min`,ok:parseInt(media)<=15,desc:"Média de todas as unidades"},
      ].map((m,i)=>(
       <div key={i} style={{display:"flex",alignItems:"center",gap:7,padding:"5px 7px",borderRadius:6,background:m.ok?JBL:"#fde8e8",marginBottom:4}}>
        <span style={{fontSize:12}}>{m.ok?"✅":"⚠️"}</span>
        <div><div style={{fontSize:9,fontWeight:700,color:m.ok?JB:RED}}>{m.meta}: {m.val}</div><div style={{fontSize:8,color:MUTED}}>{m.desc}</div></div>
       </div>
      ))}
     </Card>
    </div>
   </div>
  </div>
 );
}

/* ── APP ── */
const origensData=[{name:"Freq. Shopping",count:298},{name:"Já é cliente",count:215},{name:"WhatsApp",count:130},{name:"Instagram/Google",count:88},{name:"Indicação",count:64},{name:"Outros",count:45}];

/* ── Localidades & Regiões ── */
function RegiaoPanel({lojas}){
 const byRegiao={};
 lojas.forEach(l=>{
  if(!l.valTotal)return;
  if(!byRegiao[l.regiao])byRegiao[l.regiao]={regiao:l.regiao,val:0,ouro:0,lojas:[]};
  byRegiao[l.regiao].val+=l.valTotal;
  byRegiao[l.regiao].ouro+=l.ouro;
  byRegiao[l.regiao].lojas.push(l.n);
 });
 const regioes=Object.values(byRegiao).sort((a,b)=>b.val-a.val);
 const maxVal=regioes[0]?.val||1;

 const byCidade={};
 lojas.forEach(l=>{
  if(!l.valTotal)return;
  const key=l.cidade||l.regiao;
  if(!byCidade[key])byCidade[key]={cidade:key,regiao:l.regiao,val:0,ouro:0};
  byCidade[key].val+=l.valTotal;
  byCidade[key].ouro+=l.ouro;
 });
 const cidades=Object.values(byCidade).sort((a,b)=>b.val-a.val);
 const maxCid=cidades[0]?.val||1;

 return(
  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
   <Card title="🗺️ Volume por Região">
    <div style={{display:"flex",flexDirection:"column",gap:7}}>
     {regioes.map((r,i)=>{
      const barW=(r.val/maxVal*100).toFixed(0);
      return(
       <div key={r.regiao}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
         <div>
          <span style={{fontSize:10,fontWeight:700,color:TEXT}}>{r.regiao}</span>
          <span style={{fontSize:8,color:MUTED,marginLeft:5}}>{r.lojas.length} loja{r.lojas.length>1?"s":""}</span>
         </div>
         <div style={{textAlign:"right"}}>
          <div style={{fontSize:10,fontWeight:700,color:JB}}>{fmt(r.val)}</div>
          <div style={{fontSize:8,color:MUTED}}>{fmtN(r.ouro)} gr</div>
         </div>
        </div>
        <div style={{background:"#e8f5f0",borderRadius:4,height:10,overflow:"hidden"}}>
         <div style={{width:`${barW}%`,height:"100%",background:COLORS[i%COLORS.length],borderRadius:4}}/>
        </div>
        <div style={{display:"flex",gap:4,marginTop:2,flexWrap:"wrap"}}>
         {r.lojas.map(n=><span key={n} style={{fontSize:7,background:JBL,color:JB,padding:"0px 4px",borderRadius:6,border:`1px solid ${JB2}30`}}>{n}</span>)}
        </div>
       </div>
      );
     })}
    </div>
   </Card>
   <Card title="📍 Localidades com Mais Compras">
    <div style={{display:"flex",flexDirection:"column",gap:6}}>
     {cidades.map((c,i)=>{
      const barW=(c.val/maxCid*100).toFixed(0);
      const medals=["🥇","🥈","🥉"];
      return(
       <div key={c.cidade} style={{padding:"6px 9px",background:i<3?JBL:"#F7FDFB",borderRadius:8,border:`1px solid ${i===0?GOLD:i<3?JB2+"40":"#E0EDE6"}`}}>
        <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
         <span style={{fontSize:i<3?13:10}}>{medals[i]||`#${i+1}`}</span>
         <div style={{flex:1}}>
          <div style={{fontSize:10,fontWeight:700,color:TEXT}}>{c.cidade}</div>
          <div style={{fontSize:8,color:MUTED}}>{c.regiao}</div>
         </div>
         <div style={{textAlign:"right"}}>
          <div style={{fontSize:10,fontWeight:700,color:JB}}>{fmt(c.val)}</div>
          <div style={{fontSize:8,color:MUTED}}>{fmtN(c.ouro)} gr</div>
         </div>
        </div>
        <div style={{background:"#dceee5",borderRadius:3,height:6,overflow:"hidden"}}>
         <div style={{width:`${barW}%`,height:"100%",background:COLORS[i%COLORS.length],borderRadius:3}}/>
        </div>
       </div>
      );
     })}
    </div>
   </Card>
  </div>
 );
}

function GraficoDiario(){
 const [metrica,setMetrica]=useState("v");
 const [mesSel,setMesSel]=useState(MES_ATUAL.id);
 const mSel=MESES.find(m=>m.id===mesSel)||MES_ATUAL;
 const daily=(mSel.daily||[]).map(d=>({d:d[0],v:d[1],o:d[2],n:d[3]}));
 const maxDay=daily.reduce((mx,d)=>d[metrica]>mx?d[metrica]:mx,0)||1;
 const mediaDay=daily.length?daily.reduce((s,d)=>s+d[metrica],0)/daily.length:0;
 const topDia=daily.reduce((mx,d)=>d[metrica]>(mx[metrica]||0)?d:mx,daily[0]||{d:"—",val:0,ouro:0,ops:0});
 const tsM=id=>({padding:"4px 10px",borderRadius:6,cursor:"pointer",fontSize:10,fontWeight:mesSel===id?700:400,background:mesSel===id?JB:"#fff",color:mesSel===id?"#fff":JB2,border:mesSel===id?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s"});
 const tsV=id=>({padding:"4px 10px",borderRadius:6,cursor:"pointer",fontSize:10,fontWeight:metrica===id?700:400,background:metrica===id?JB2:"#fff",color:metrica===id?"#fff":MUTED,border:metrica===id?`1px solid ${JB2}`:`1px solid #ddd`,transition:"all .15s"});
 return(
  <Card title="📅 Picos de Compra — Visão Diária">
   <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap",alignItems:"center"}}>
    <div style={{display:"flex",gap:5}}>
     {MESES.map(m=><button key={m.id} style={tsM(m.id)} onClick={()=>setMesSel(m.id)}>{m.label}</button>)}
    </div>
    <div style={{display:"flex",gap:5,marginLeft:"auto"}}>
     {[["v","💰 Valor"],["o","⚜️ Gramas"],["n","🔢 Ops"]].map(([id,lb])=>(
      <button key={id} style={tsV(id)} onClick={()=>setMetrica(id)}>{lb}</button>
     ))}
    </div>
   </div>
   <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:10}}>
    <div style={{padding:"7px 10px",background:JBL,borderRadius:7,border:`1px solid ${JB2}30`}}>
     <div style={{fontSize:8,color:MUTED,textTransform:"uppercase",letterSpacing:"0.07em"}}>🏆 Pico do Mês</div>
     <div style={{fontSize:13,fontWeight:800,color:JB}}>{topDia.d}</div>
     <div style={{fontSize:10,color:JB2}}>{metrica==="v"?fmt(topDia.v||0):metrica==="o"?fmtN(topDia.o||0)+" gr":(topDia.n||0)+" ops"}</div>
    </div>
    <div style={{padding:"7px 10px",background:"#FFF8E1",borderRadius:7,border:`1px solid ${GOLD}40`}}>
     <div style={{fontSize:8,color:MUTED,textTransform:"uppercase",letterSpacing:"0.07em"}}>📊 Média Diária</div>
     <div style={{fontSize:13,fontWeight:800,color:AMBAR}}>{metrica==="v"?fmt(Math.round(mediaDay)):metrica==="o"?fmtN(Math.round(mediaDay*100)/100)+" gr":Math.round(mediaDay)+" ops"}</div>
    </div>
    <div style={{padding:"7px 10px",background:"#F7FDFB",borderRadius:7,border:`1px solid ${JB2}30`}}>
     <div style={{fontSize:8,color:MUTED,textTransform:"uppercase",letterSpacing:"0.07em"}}>📆 Dias com compras</div>
     <div style={{fontSize:13,fontWeight:800,color:JB2}}>{daily.length} dias</div>
     <div style={{fontSize:9,color:MUTED}}>{mSel.label}</div>
    </div>
   </div>
   <ResponsiveContainer width="100%" height={210}>
    <BarChart data={daily} margin={{left:0,right:0}}>
     <CartesianGrid strokeDasharray="3 3" stroke="#E0F0E8" vertical={false}/>
     <XAxis dataKey="d" tick={{fill:MUTED,fontSize:8}} tickLine={false} interval={2}/>
     <YAxis tick={{fill:MUTED,fontSize:9}} tickLine={false} axisLine={false}
      tickFormatter={v=>metrica==="v"?`R$${Math.round(v/1000)}k`:metrica==="o"?`${Math.round(v)}gr`:`${v}`}/>
     <Tooltip formatter={(v)=>[metrica==="v"?fmt(v):metrica==="o"?fmtN(v)+" gr":v+" ops"]} contentStyle={{background:"#fff",border:`1px solid ${GOLD}`,borderRadius:7,fontSize:11}}/>
     <Bar dataKey={metrica} radius={[3,3,0,0]}>
      {daily.map((d,i)=>{
       const isTop=d[metrica]===maxDay;
       const isPeak=d[metrica]>mediaDay*1.5;
       return <Cell key={i} fill={isTop?GOLD:isPeak?JB2:JBL} stroke={isTop?GOLD:"none"} strokeWidth={isTop?1.5:0}/>;
      })}
     </Bar>
    </BarChart>
   </ResponsiveContainer>
   <div style={{display:"flex",gap:12,marginTop:4,justifyContent:"flex-end"}}>
    {[[GOLD,"🏆 Pico"],[JB2,"📈 Acima média"],[JBL,"Normal"]].map(([c,l])=>(
     <div key={l} style={{display:"flex",alignItems:"center",gap:3,fontSize:9,color:MUTED}}>
      <div style={{width:8,height:8,borderRadius:2,background:c}}/>{l}
     </div>
    ))}
   </div>
  </Card>
 );
}

export default function App(){
 const [tab,setTab]=useState("overview");
 const [lojaIdx,setLojaIdx]=useState(0);
 const [animated,setAnimated]=useState(false);
 const [sideOpen,setSideOpen]=useState(true);
 useEffect(()=>{
  if(tab==="metas"||tab==="loja"){const t=setTimeout(()=>setAnimated(true),300);return()=>clearTimeout(t);}
  setAnimated(false);
 },[tab]);

 const lojaAtual=MES_ATUAL.lojas[lojaIdx]||MES_ATUAL.lojas[0];
 const lojaOk=lojaAtual.ouro>=lojaAtual.meta;
 const lojaSuperou=lojaAtual.ouro-lojaAtual.meta;
 const tCol=lojaAtual.ticketOuro>0?ticketColor(lojaAtual.ticketOuro,minT,maxT):JB;
 const tLbl=lojaAtual.ticketOuro>0?ticketLabel(lojaAtual.ticketOuro,minT,maxT):"—";
 const lojasAtivas=MES_ATUAL.lojas.filter(l=>l.valTotal>0);
 const lojasBateram=lojasAtivas.filter(l=>l.ouro>=l.meta).length;
 const sortedTick=[...lojasAtivas].sort((a,b)=>a.ticketOuro-b.ticketOuro);

 const tabs=[
  {id:"overview",label:"Visão Geral"},{id:"metas",label:"Metas"},
  {id:"ranking",label:"🏆 Ranking"},{id:"loja",label:"Por Loja"},
  {id:"comparativo",label:"📈 Comparativo"},{id:"funil",label:"🔽 Funil CRM"},
  {id:"marketing",label:"📤 Marketing"},{id:"tempo",label:"⏱️ Resposta"},
 ];
 const ts=id=>({padding:"5px 10px",borderRadius:7,cursor:"pointer",fontSize:11,fontWeight:tab===id?700:500,background:tab===id?"rgba(255,255,255,0.18)":"transparent",color:tab===id?"#fff":"rgba(255,255,255,0.6)",border:tab===id?"1px solid rgba(255,255,255,0.35)":"1px solid transparent",transition:"all .18s"});

return(
  <div style={{display:"flex",minHeight:"100vh",background:"#EEF6F2",fontFamily:"'Inter',sans-serif",color:TEXT}}>
<div style={{width:sideOpen?220:58,flexShrink:0,background:JB,display:"flex",flexDirection:"column",transition:"width 0.25s ease",overflow:"hidden",position:"sticky",top:0,height:"100vh",zIndex:100,borderRight:`1px solid rgba(255,255,255,0.08)`}}>
    <div style={{padding:sideOpen?"12px 14px":"8px",borderBottom:`1px solid rgba(255,255,255,0.08)`,display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
     <img src={LOGO_JB} alt="JB" style={{width:32,height:32,borderRadius:7,objectFit:"cover",border:`1.5px solid ${GOLD}`,flexShrink:0}}/>
     {sideOpen&&<div><div style={{fontSize:13,fontWeight:700,color:"#fff",whiteSpace:"nowrap",lineHeight:1.2}}>Joia Bank</div><div style={{fontSize:8,color:"rgba(255,255,255,0.45)",whiteSpace:"nowrap"}}>{MES_ATUAL.label}</div></div>}
    </div>
    <button onClick={()=>setSideOpen(o=>!o)} style={{background:"none",border:"none",color:"rgba(255,255,255,0.4)",cursor:"pointer",padding:"6px 0",textAlign:"center",fontSize:14,flexShrink:0,borderBottom:`1px solid rgba(255,255,255,0.06)`}}>
     {sideOpen?"◀":"▶"}
    </button>
    <nav style={{flex:1,padding:"4px 0",overflowY:"auto"}}>
     {[
      {id:"overview",  icon:"📊",label:"Visão Geral"},
      {id:"metas",     icon:"🎯",label:"Metas"},
      {id:"ranking",   icon:"🏆",label:"Ranking"},
      {id:"loja",      icon:"🏪",label:"Por Loja"},
      {id:"comparativo",icon:"📈",label:"Comparativo"},
      {id:"funil",     icon:"🔽",label:"Funil CRM"},
      {id:"marketing", icon:"📤",label:"Marketing"},
      {id:"tempo",     icon:"⏱️",label:"Resposta"},
     ].map(it=>(
      <button key={it.id} onClick={()=>setTab(it.id)}
       style={{width:"100%",display:"flex",alignItems:"center",gap:10,padding:sideOpen?"9px 16px":"9px 0",justifyContent:sideOpen?"flex-start":"center",background:tab===it.id?"rgba(201,168,76,0.15)":"none",border:"none",borderLeft:tab===it.id?`3px solid ${GOLD}`:"3px solid transparent",cursor:"pointer",color:tab===it.id?"#fff":"rgba(255,255,255,0.5)",transition:"all .15s",textAlign:"left",margin:"1px 0"}}>
       <span style={{fontSize:15,flexShrink:0,lineHeight:1}}>{it.icon}</span>
       {sideOpen&&<span style={{fontSize:11,fontWeight:tab===it.id?700:400,whiteSpace:"nowrap"}}>{it.label}</span>}
      </button>
     ))}
    </nav>
    <div style={{padding:sideOpen?"8px 12px":"6px",borderTop:`1px solid rgba(255,255,255,0.08)`,display:"flex",alignItems:"center",gap:6,justifyContent:sideOpen?"flex-start":"center",flexShrink:0}}>
     {sideOpen?<><span style={{fontSize:7,color:"rgba(255,255,255,0.3)",letterSpacing:"0.08em",textTransform:"uppercase"}}>por</span><img src={LOGO_NV} alt="NT" style={{height:16,objectFit:"contain",filter:"brightness(0) invert(1)",opacity:0.5}}/></>:<img src={LOGO_NV} alt="NT" style={{height:12,objectFit:"contain",filter:"brightness(0) invert(1)",opacity:0.35}}/>}
    </div>
   </div>
<div style={{flex:1,display:"flex",flexDirection:"column",minWidth:0}}>
<div style={{background:"#fff",borderBottom:`1px solid ${JBL}`,padding:"7px 18px",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap",flexShrink:0,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
     <div style={{fontWeight:700,color:JB,fontSize:13}}>
      {[{id:"overview",l:"📊 Visão Geral"},{id:"metas",l:"🎯 Metas"},{id:"ranking",l:"🏆 Ranking"},{id:"loja",l:"🏪 Por Loja"},{id:"comparativo",l:"📈 Comparativo"},{id:"funil",l:"🔽 Funil CRM"},{id:"marketing",l:"📤 Marketing"},{id:"tempo",l:"⏱️ Tempo de Resposta"}].find(x=>x.id===tab)?.l}
     </div>
     <div style={{marginLeft:"auto",display:"flex",gap:10,flexWrap:"wrap"}}>
      {[{dot:JB,txt:`${MES_ATUAL.short}: ${fmt(MES_ATUAL.totalVal)}`},{dot:GOLD,txt:MES_ANT?`+${calcPct(MES_ATUAL.totalVal,MES_ANT.totalVal)}% vs ${MES_ANT.short}`:"Mês atual"},{dot:JB2,txt:`${fmtN(MES_ATUAL.totalOuro)} gr`},{dot:JB,txt:`${lojasBateram}/${lojasAtivas.length} metas`},{dot:AMBAR,txt:"Ticket ↓ = margem ↑"}].map((s,i)=>(
       <div key={i} style={{display:"flex",alignItems:"center",gap:3,fontSize:9,color:MUTED}}>
        <div style={{width:5,height:5,borderRadius:"50%",background:s.dot,flexShrink:0}}/>{s.txt}
       </div>
      ))}
     </div>
    </div>
<div style={{padding:"14px 18px",flex:1,overflowY:"auto"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(5,minmax(0,1fr))",gap:9,marginBottom:14}}>
      <KPI label={`Valor — ${MES_ATUAL.short}`} value={fmt(MES_ATUAL.totalVal)} sub={MES_ANT?`+${calcPct(MES_ATUAL.totalVal,MES_ANT.totalVal)}% vs ${MES_ANT.short}`:null} accent={JB}/>
      <KPI label="Ouro Comprado" value={`${fmtN(MES_ATUAL.totalOuro)} gr`} sub={`Meta: ${fmtN(MES_ATUAL.metaRede)} gr`} accent={JB2} badge={{t:(MES_ATUAL.totalOuro/MES_ATUAL.metaRede*100).toFixed(0)+"%",c:JB}}/>
      <KPI label="Crescimento" value={MES_ANT?`+${calcPct(MES_ATUAL.totalVal,MES_ANT.totalVal)}%`:"—"} sub={MES_ANT?`+R$ ${fmtN((MES_ATUAL.totalVal-MES_ANT.totalVal)/1000)}k`:null} accent={GOLD}/>
      <KPI label="Lojas Ativas" value={`${lojasAtivas.length} lojas`} sub={`${lojasBateram} bateram a meta`} accent={JB}/>
      <KPI label="Ticket Médio" value={fmt(Math.round(MES_ATUAL.lojas.filter(l=>l.ticketOuro>0).reduce((s,l)=>s+l.ticketOuro,0)/MES_ATUAL.lojas.filter(l=>l.ticketOuro>0).length))} sub="Por grama" accent={JB} note="↓ Menor = melhor margem" invertLogic={true}/>
     </div>
{tab==="overview"&&(
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
       <RegiaoPanel lojas={lojasAtivas}/>
       <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <Card title="🔍 Origem das Compras">
         <div style={{display:"flex",alignItems:"center"}}>
          <ResponsiveContainer width="45%" height={150}>
           <PieChart><Pie data={origensData} dataKey="count" innerRadius={36} outerRadius={57} paddingAngle={3}>
            {origensData.map((_,i)=><Cell key={i} fill={COLORS[i]}/>)}
           </Pie><Tooltip formatter={(v,_,p)=>[v+" vendas",p.payload.name]}/></PieChart>
          </ResponsiveContainer>
          <div style={{flex:1,display:"flex",flexDirection:"column",gap:4}}>
           {origensData.map((d,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:4}}>
             <div style={{width:6,height:6,borderRadius:"50%",background:COLORS[i],flexShrink:0}}/>
             <div style={{fontSize:9,color:TEXT,flex:1}}>{d.name}</div>
             <div style={{fontSize:9,fontWeight:700,color:JB}}>{d.count}</div>
            </div>
           ))}
          </div>
         </div>
        </Card>
        <Card title="🎫 Ticket — Menor é Melhor Margem">
         <div style={{fontSize:8,color:MUTED,marginBottom:5,padding:"3px 6px",background:"#FFF8E1",borderRadius:4,border:`1px solid ${GOLD}40`}}>Ticket baixo = compra ouro mais barato por grama = maior margem</div>
         <div style={{display:"flex",flexDirection:"column",gap:4}}>
          {sortedTick.map((l,i)=>{
           const tColor=ticketColor(l.ticketOuro,minT,maxT);
           const barW=(1-(l.ticketOuro-minT)/(maxT-minT))*100;
           return(
            <div key={l.n} style={{display:"flex",alignItems:"center",gap:4}}>
             <div style={{fontSize:8,color:MUTED,width:14,textAlign:"right",flexShrink:0}}>#{i+1}</div>
             <div style={{fontSize:8,color:TEXT,width:78,flexShrink:0}}>{l.n}</div>
             <div style={{flex:1,background:"#e8f5f0",borderRadius:3,height:7,overflow:"hidden"}}>
              <div style={{width:`${barW.toFixed(0)}%`,height:"100%",background:tColor,borderRadius:3}}/>
             </div>
             <div style={{fontSize:9,fontWeight:700,color:tColor,minWidth:46,textAlign:"right"}}>{fmt(l.ticketOuro)}</div>
            </div>
           );
          })}
         </div>
        </Card>
       </div>
      </div>
       {(()=>{const av=MES_ATUAL.auditVerif,at=MES_ATUAL.auditTotal,ap=(av/at*100).toFixed(1);return(
       <div style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:"12px 14px",boxShadow:"0 1px 6px rgba(0,0,0,0.05)"}}>
        <div style={{fontSize:10,fontWeight:700,color:JB,marginBottom:10,display:"flex",alignItems:"center",gap:6}}>
         <span style={{display:"inline-block",width:3,height:11,background:GOLD,borderRadius:1}}/>
         🔍 Auditoria Nuvian Tech · {MES_ATUAL.label}
         <span style={{marginLeft:"auto",fontSize:9,color:"#fff",fontWeight:700,background:JB,padding:"2px 10px",borderRadius:20}}>Auditado por Nuvian Tech ✓</span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:10}}>
         {[[av,"Verificados",JB,JBL],[at-av,"Não Verificados",at-av>0?RED:JB,at-av>0?"#fde8e8":JBL],[at,"Total Atend.",GOLD,"#FFF8E1"],[ap+"%","Taxa Verif.",JB,JBL]].map(([v,l,c,bg],i)=>(
          <div key={i} style={{textAlign:"center",padding:"10px 8px",background:bg,borderRadius:8,border:`1px solid ${c}30`}}>
           <div style={{fontSize:22,fontWeight:900,color:c}}>{v}</div>
           <div style={{fontSize:8,color:MUTED,marginTop:1}}>{l}</div>
          </div>
         ))}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
         <div style={{flex:1,background:"#e8f5f0",borderRadius:4,height:10,overflow:"hidden"}}>
          <div style={{width:`${ap}%`,height:"100%",background:`linear-gradient(90deg,${JB},${JB2})`,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:5}}>
           <span style={{color:"#fff",fontSize:8,fontWeight:700}}>{ap}%</span>
          </div>
         </div>
         {MES_ANT&&<span style={{fontSize:9,color:MUTED,flexShrink:0}}>{MES_ANT.short}: {(MES_ANT.auditVerif/MES_ANT.auditTotal*100).toFixed(1)}%</span>}
        </div>
       </div>
       );})()}
     )}
{tab==="metas"&&(
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
       <Card style={{padding:"12px 14px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7,flexWrap:"wrap",gap:5}}>
         <div style={{fontSize:10,fontWeight:700,color:JB,display:"flex",alignItems:"center",gap:4}}>
          <span style={{display:"inline-block",width:3,height:11,background:GOLD,borderRadius:1}}/>🎯 Meta da Rede — {MES_ATUAL.label}
         </div>
         <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
          {[{l:"Meta",v:fmtN(MES_ATUAL.metaRede)+" gr",bg:JBL,col:JB},{l:"Comprado",v:fmtN(MES_ATUAL.totalOuro)+" gr",bg:"#fff8e1",col:GOLD},{l:"Resultado",v:(MES_ATUAL.totalOuro>=MES_ATUAL.metaRede?"+":"")+fmtN(MES_ATUAL.totalOuro-MES_ATUAL.metaRede)+" gr",bg:MES_ATUAL.totalOuro>=MES_ATUAL.metaRede?"#e8f5f0":"#fde8e8",col:MES_ATUAL.totalOuro>=MES_ATUAL.metaRede?JB2:RED},{l:(MES_ATUAL.totalOuro/MES_ATUAL.metaRede*100).toFixed(1)+"%",v:"",bg:JB,col:"#fff"}].map((b,i)=>(
           <div key={i} style={{background:b.bg,border:`1px solid ${b.col}50`,borderRadius:6,padding:"3px 8px",textAlign:"center",minWidth:70}}>
            <div style={{fontSize:7,color:i===3?"rgba(255,255,255,0.6)":MUTED,textTransform:"uppercase",letterSpacing:"0.06em"}}>{b.l}</div>
            {b.v&&<div style={{fontSize:10,fontWeight:700,color:b.col}}>{b.v}</div>}
           </div>
          ))}
         </div>
        </div>
        <div style={{position:"relative",background:"#e8f5f0",borderRadius:5,height:20,overflow:"visible",border:`1px solid ${JBL}`}}>
         <div style={{width:animated?`${Math.min(MES_ATUAL.totalOuro/MES_ATUAL.metaRede*100,100)}%`:"0%",height:"100%",background:`linear-gradient(90deg,${JB},${JB2})`,borderRadius:5,transition:"width 1.2s ease",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:6}}>
          <span style={{color:"#fff",fontWeight:700,fontSize:8}}>{fmtN(MES_ATUAL.totalOuro)} gr</span>
         </div>
        </div>
       </Card>
       <Card title={`🏪 Meta por Loja — ${MES_ATUAL.label}`}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 22px"}}>
         {[...lojasAtivas].sort((a,b)=>b.ouro/b.meta-a.ouro/a.meta).map(l=><MetaBar key={l.n} l={l} animated={animated}/>)}
        </div>
       </Card>
       <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:9}}>
        {[{val:`${lojasBateram}`,lbl:"lojas bateram a meta",sub:lojasAtivas.filter(l=>l.ouro>=l.meta).map(l=>l.n).join(", "),col:JB},{val:`${lojasAtivas.length-lojasBateram}`,lbl:"lojas abaixo da meta",sub:lojasAtivas.filter(l=>l.ouro<l.meta).map(l=>l.n).join(", "),col:RED},{val:(lojasAtivas.reduce((mx,l)=>l.ouro/l.meta>mx.ouro/mx.meta?l:mx,lojasAtivas[0]).ouro/lojasAtivas.reduce((mx,l)=>l.ouro/l.meta>mx.ouro/mx.meta?l:mx,lojasAtivas[0]).meta*100).toFixed(1)+"%",lbl:"melhor performance",sub:lojasAtivas.reduce((mx,l)=>l.ouro/l.meta>mx.ouro/mx.meta?l:mx,lojasAtivas[0]).n,col:GOLD}].map((s,i)=>(
         <Card key={i} style={{textAlign:"center",padding:"12px"}}>
          <div style={{fontSize:30,fontWeight:900,fontFamily:"'Inter',sans-serif",color:s.col}}>{s.val}</div>
          <div style={{color:MUTED,fontSize:10,marginBottom:3}}>{s.lbl}</div>
          <div style={{fontSize:8,color:s.col,fontWeight:600}}>{s.sub}</div>
         </Card>
        ))}
       </div>
      </div>
     )}
{tab==="ranking"&&<RankingLojas/>}
{tab==="loja"&&(
      <div>
       <div style={{display:"flex",gap:5,marginBottom:12,flexWrap:"wrap"}}>
        {MES_ATUAL.lojas.map((l,i)=>(
         <button key={l.n} onClick={()=>{setLojaIdx(i);setAnimated(false);setTimeout(()=>setAnimated(true),200);}}
          style={{padding:"4px 8px",borderRadius:6,cursor:"pointer",fontSize:9,fontWeight:lojaIdx===i?700:400,background:lojaIdx===i?JB:"#fff",color:lojaIdx===i?"#fff":JB2,border:lojaIdx===i?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s",opacity:lojaAtual.valTotal===0&&lojaIdx!==i?0.4:1}}>
         {l.n}
         </button>
        ))}
       </div>
       {lojaAtual.valTotal>0?(
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
         <div style={{display:"grid",gridTemplateColumns:"repeat(5,minmax(0,1fr))",gap:9}}>
          <KPI label="Valor Total" value={fmt(lojaAtual.valTotal)} sub="Ouro + Prata" accent={JB}/>
          <KPI label="Ouro Comprado" value={`${fmtN(lojaAtual.ouro)} gr`} sub={`Meta: ${fmtN(lojaAtual.meta)} gr`} accent={lojaOk?JB2:RED} badge={lojaOk?{t:"META BATIDA",c:JB}:{t:"ABAIXO",c:RED}}/>
          <KPI label="Ticket Ouro" value={lojaAtual.ticketOuro>0?fmt(lojaAtual.ticketOuro):"—"} sub={tLbl} accent={tCol} note="Menor = melhor" invertLogic={true}/>
          <KPI label="% da Meta" value={lojaAtual.meta>0?(lojaAtual.ouro/lojaAtual.meta*100).toFixed(1)+"%":"—"} sub={lojaOk?`+${fmtN(lojaSuperou)} gr`:`${fmtN(lojaSuperou)} gr`} accent={lojaOk?JB:RED}/>
          <KPI label="Cidade" value={lojaAtual.cidade?.split(',')[0]||"—"} sub={lojaAtual.regiao} accent={GOLD}/>
         </div>
<Card title={`📍 Localidade — ${lojaAtual.cidade||lojaAtual.regiao}`}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
           <div style={{padding:"10px 12px",background:JBL,borderRadius:8,border:`1px solid ${JB2}30`}}>
            <div style={{fontSize:9,color:MUTED,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:3}}>Cidade</div>
            <div style={{fontSize:13,fontWeight:700,color:JB}}>{lojaAtual.cidade?.split(',')[0]||"—"}</div>
            <div style={{fontSize:9,color:MUTED}}>{lojaAtual.cidade?.split(',')[1]?.trim()||""}</div>
           </div>
           <div style={{padding:"10px 12px",background:"#FFF8E1",borderRadius:8,border:`1px solid ${GOLD}40`}}>
            <div style={{fontSize:9,color:MUTED,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:3}}>Região</div>
            <div style={{fontSize:13,fontWeight:700,color:AMBAR}}>{lojaAtual.regiao}</div>
            <div style={{fontSize:9,color:MUTED}}>{(()=>{const reg=MES_ATUAL.lojas.filter(l=>l.regiao===lojaAtual.regiao&&l.valTotal>0);return`${reg.length} loja${reg.length>1?"s":""} nesta região`;})()}</div>
           </div>
           <div style={{padding:"10px 12px",background:"#F7FDFB",borderRadius:8,border:`1px solid ${JB2}30`}}>
            <div style={{fontSize:9,color:MUTED,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:3}}>% do Total Rede</div>
            <div style={{fontSize:13,fontWeight:700,color:JB2}}>{(lojaAtual.valTotal/MES_ATUAL.totalVal*100).toFixed(1)}%</div>
            <div style={{fontSize:9,color:MUTED}}>do volume total</div>
           </div>
          </div>
{(()=>{const regiaoLojas=MES_ATUAL.lojas.filter(l=>l.regiao===lojaAtual.regiao&&l.valTotal>0&&l.n!==lojaAtual.n);return regiaoLojas.length>0?(
           <div style={{marginTop:10}}>
            <div style={{fontSize:9,color:MUTED,marginBottom:6}}>Outras lojas na mesma região:</div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
             {regiaoLojas.map(l=>(
              <div key={l.n} style={{padding:"5px 10px",background:"#fff",borderRadius:7,border:`1px solid ${JB2}40`,display:"flex",gap:8,alignItems:"center"}}>
               <div><div style={{fontSize:9,fontWeight:700,color:JB}}>{l.n}</div><div style={{fontSize:8,color:MUTED}}>{fmt(l.valTotal)}</div></div>
               <span style={{fontSize:8,padding:"1px 5px",borderRadius:8,fontWeight:700,background:l.ouro>=l.meta?JBL:"#fde8e8",color:l.ouro>=l.meta?JB:RED}}>{(l.ouro/l.meta*100).toFixed(0)}%</span>
              </div>
             ))}
            </div>
           </div>
          ):null;})()}
         </Card>
         <Card style={{padding:"11px 13px"}}>
          <MetaBar l={lojaAtual} animated={animated}/>
         </Card>
         {(()=>{const gSim=lojaAtual.funcs.reduce((s,f)=>s+(f.gSim||0),0);const gNao=lojaAtual.funcs.reduce((s,f)=>s+(f.gNao||0),0);const conv=gSim+gNao>0?Math.round(gSim/(gSim+gNao)*100):0;return gSim+gNao>0?(
          <div style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:"#FFF8E1",borderRadius:9,border:`1px solid ${GOLD}40`}}>
           <span style={{fontSize:15}}>⭐</span>
           <div style={{flex:1}}>
            <div style={{display:"flex",height:7,borderRadius:3,overflow:"hidden",marginBottom:3}}>
             <div style={{flex:gSim,background:JB}}/><div style={{flex:gNao,background:"#e0e0e0"}}/>
            </div>
            <div style={{fontSize:9,color:MUTED}}>Google: <strong style={{color:JB}}>{gSim} avaliações</strong> / {gNao} não conv.</div>
           </div>
           <div style={{textAlign:"center"}}><div style={{fontSize:18,fontWeight:900,color:conv>=60?JB:RED}}>{conv}%</div><div style={{fontSize:8,color:MUTED}}>conv.</div></div>
          </div>
         ):null;})()}
         <Card title={`🏆 Funcionários — ${lojaAtual.n} · ${MES_ATUAL.label}`}>
          {lojaAtual.funcs.length>0?<FuncLoja funcs={lojaAtual.funcs}/>:<div style={{fontSize:11,color:MUTED,textAlign:"center",padding:"16px 0"}}>Sem dados de funcionários.</div>}
         </Card>
        </div>
       ):(
        <div style={{padding:"24px",background:"#fff",borderRadius:10,textAlign:"center",border:`1px solid ${GOLD}40`}}>
         <div style={{fontSize:20,marginBottom:6}}>🆕</div>
         <div style={{fontSize:14,fontWeight:700,color:JB,marginBottom:3}}>Unidade Nova em {MES_ATUAL.label}</div>
         <div style={{fontSize:11,color:MUTED}}>Dados disponíveis no próximo mês.</div>
        </div>
       )}
      </div>
     )}

     {tab==="comparativo"&&<TabComparativo/>}
     {tab==="funil"&&<TabFunil/>}
     {tab==="marketing"&&<TabMarketing/>}
     {tab==="tempo"&&<TabTempo/>}
    </div>
   </div>
  </div>
 );
}daily:[["01/03",44564,105,11],["02/03",117233,283.5,27],["03/03",133979,316.2,32],["04/03",123688,315.6,34],["05/03",112478,272.2,32],["06/03",155650,379.6,41],["07/03",107386,278.3,25],["08/03",6160,15.6,5],["09/03",66429,185.2,27],["10/03",114827,274.1,27],["11/03",100073,254.4,25],["12/03",37050,91.7,19],["13/03",112249,271.4,36],["14/03",144442,344.7,34],["15/03",4607,13.1,3],["16/03",276364,619.8,47],["17/03",127535,315.6,36],["18/03",120087,273.4,34],["19/03",164048,429.4,26],["20/03",106182,269.5,45],["21/03",99284,256.2,29],["22/03",31954,80.6,9],["23/03",73119,199.3,35],["24/03",127073,318.9,29],["25/03",146761,356.9,45],["26/03",178119,464.7,40],["27/03",84307,221.7,35],["28/03",74247,210.5,20],["29/03",10200,25.8,6],["30/03",124478,331.6,34],["31/03",99213,262.9,28]],
    funil:{"Leads Novos":3838,"Leads Delegados":4378,"Em Atendimento":4129,"1º Contato":2464,"2º Contato":2154,"3º Contato":1630,"Negociação":35,"Remarketing":800,"Agendamento":423,"Reagendamento":61,"Compras Ouro":888,"Compras Prata":114,"Total Compras":1002,"Atend. Finalizados":4820},
    motivos:{"Sem Interesse":733,"Outro Material":186,"Cotação Baixa":174,"Quer Comprar Joias":133,"Mora Longe":132,"Joias Terceiros":13,"Vendeu Concorrente":126,"Não Fechou por Valor":73,"Vender Mais Frente":505},
    marketing:{disparados:2360,compras:28,gramas:334.48,valor:128732},
    tempo:{"Mauá":7,"Cuiabá":12,"Light":13,"Grand Plaza":22,"Boulevard":7,"Poços Caldas":29,"São Bernardo":5,"Suzano":21,"São Caetano":4,"Santos":3,"Brás":14,"Santa Maria":11,"São José SC":45,"Penha":3,"Osasco":2},
    lojas:[
      {n:"GRAND PLAZA",  regiao:"SP ABC",cidade:"Santo André, SP",    ouro:1361.37,valOuro:530050,valTotal:531596,ticketOuro:389.35,meta:800,funcs:[{nome:"Bruna",emoji:"👑",ouro:627.89,valor:256504,gSim:49,gNao:10},{nome:"Emilly",emoji:"⭐",ouro:454.31,valor:166092,gSim:46,gNao:11},{nome:"Rosana",emoji:"🌟",ouro:270.00,valor:104364,gSim:9,gNao:6},{nome:"Priscila",emoji:"💎",ouro:9.17,valor:3091,gSim:0,gNao:0}]},
      {n:"BOULEVARD",    regiao:"SP Capital",cidade:"Santo André, SP",ouro:1073.20,valOuro:446790,valTotal:449112,ticketOuro:416.32,meta:950,funcs:[{nome:"Leila",emoji:"👑",ouro:569.20,valor:230690,gSim:0,gNao:0},{nome:"Aline",emoji:"⭐",ouro:397.90,valor:175805,gSim:0,gNao:0},{nome:"Gisleide",emoji:"🌟",ouro:68.90,valor:27226,gSim:6,gNao:2},{nome:"Rodrigo",emoji:"💎",ouro:28.90,valor:10736,gSim:8,gNao:0}]},
      {n:"LIGHT",        regiao:"SP Capital",cidade:"São Paulo, SP",ouro:1002.00,valOuro:432666,valTotal:433402,ticketOuro:431.80,meta:850,funcs:[{nome:"Acsa",emoji:"👑",ouro:446.20,valor:190544,gSim:24,gNao:17},{nome:"Lígia",emoji:"⭐",ouro:243.90,valor:102352,gSim:42,gNao:4},{nome:"Priscila",emoji:"🌟",ouro:154.00,valor:83163,gSim:0,gNao:0},{nome:"Bruna",emoji:"💎",ouro:149.50,valor:54179,gSim:49,gNao:10}]},
      {n:"CUIABÁ",       regiao:"MT",cidade:"Cuiabá, MT",        ouro:640.20, valOuro:287040,valTotal:288065,ticketOuro:448.36,meta:500,funcs:[{nome:"Maikon",emoji:"👑",ouro:640.20,valor:287041,gSim:18,gNao:17}]},
      {n:"SÃO CAETANO",  regiao:"SP ABC",cidade:"São Caetano do Sul, SP",    ouro:654.80, valOuro:257060,valTotal:258039,ticketOuro:392.58,meta:450,funcs:[{nome:"Michele",emoji:"👑",ouro:363.00,valor:135372,gSim:13,gNao:2},{nome:"Edivania S.",emoji:"⭐",ouro:291.80,valor:121689,gSim:24,gNao:13}]},
      {n:"MAUÁ",         regiao:"SP ABC",cidade:"Mauá, SP",    ouro:707.80, valOuro:250241,valTotal:251057,ticketOuro:353.55,meta:550,funcs:[{nome:"Jessica",emoji:"👑",ouro:301.30,valor:100349,gSim:34,gNao:19},{nome:"Bruna S.",emoji:"⭐",ouro:257.90,valor:97406,gSim:31,gNao:12},{nome:"Michele",emoji:"🌟",ouro:139.30,valor:48767,gSim:13,gNao:2},{nome:"Camile",emoji:"💎",ouro:9.30,valor:3720,gSim:0,gNao:1}]},
      {n:"SÃO BERNARDO", regiao:"SP ABC",cidade:"São Bernardo do Campo, SP",    ouro:609.10, valOuro:235798,valTotal:237610,ticketOuro:387.13,meta:500,funcs:[{nome:"Tamires",emoji:"👑",ouro:333.27,valor:129508,gSim:0,gNao:2},{nome:"Mariana",emoji:"⭐",ouro:172.75,valor:64892,gSim:10,gNao:14},{nome:"Rosana",emoji:"🌟",ouro:103.08,valor:41398,gSim:9,gNao:6}]},
      {n:"PENHA",        regiao:"SP Capital",cidade:"São Paulo, SP",ouro:263.23, valOuro:108044,valTotal:108579,ticketOuro:410.46,meta:200,funcs:[{nome:"Bruna F.",emoji:"👑",ouro:239.86,valor:99643,gSim:10,gNao:9},{nome:"Ítalo",emoji:"⭐",ouro:21.92,valor:7851,gSim:26,gNao:8},{nome:"Acsa",emoji:"🌟",ouro:1.45,valor:551,gSim:24,gNao:17}]},
      {n:"SANTOS",       regiao:"SP Litoral",cidade:"Santos, SP",ouro:304.90, valOuro:109367,valTotal:109367,ticketOuro:358.70,meta:200,funcs:[{nome:"Mari",emoji:"👑",ouro:209.30,valor:77553,gSim:1,gNao:1},{nome:"Raphaela S.",emoji:"⭐",ouro:95.60,valor:31815,gSim:1,gNao:3}]},
      {n:"BRÁS",         regiao:"SP Capital",cidade:"São Paulo, SP",ouro:250.90, valOuro:109339,valTotal:109556,ticketOuro:435.79,meta:200,funcs:[{nome:"Gabriel S.",emoji:"👑",ouro:169.90,valor:73377,gSim:3,gNao:4},{nome:"Gabriela",emoji:"⭐",ouro:81.00,valor:35963,gSim:3,gNao:2}]},
      {n:"SUZANO",       regiao:"SP Grande",cidade:"Suzano, SP", ouro:339.00, valOuro:132828,valTotal:132901,ticketOuro:391.83,meta:350,funcs:[{nome:"Cremilda",emoji:"👑",ouro:165.00,valor:66876,gSim:7,gNao:10},{nome:"Alethea",emoji:"⭐",ouro:98.10,valor:37837,gSim:1,gNao:7},{nome:"Simone S.",emoji:"🌟",ouro:71.90,valor:26716,gSim:8,gNao:9}]},
      {n:"POÇOS CALDAS", regiao:"MG",cidade:"Poços de Caldas, MG",        ouro:358.67, valOuro:148429,valTotal:148691,ticketOuro:413.83,meta:450,funcs:[{nome:"Regiane S.",emoji:"👑",ouro:358.67,valor:148430,gSim:0,gNao:26}]},
      {n:"SANTA MARIA",  regiao:"RS",cidade:"Santa Maria, RS",        ouro:265.00, valOuro:96870, valTotal:97041, ticketOuro:365.55,meta:200,funcs:[{nome:"Luciano",emoji:"👑",ouro:265.00,valor:96871,gSim:0,gNao:7}]},
      {n:"SÃO JOSÉ SC",  regiao:"SP Interior",cidade:"São José dos Campos, SP",ouro:154.88,valOuro:56541, valTotal:57783, ticketOuro:365.07,meta:200,funcs:[{nome:"Regiane",emoji:"👑",ouro:21.23,valor:7544,gSim:0,gNao:0},{nome:"Maria Clara",emoji:"⭐",ouro:9.11,valor:3580,gSim:0,gNao:2},{nome:"Camilly",emoji:"🌟",ouro:6.89,valor:2662,gSim:0,gNao:0}]},
      {n:"OSASCO",       regiao:"SP Grande",cidade:"Osasco, SP", ouro:98.50,  valOuro:39671, valTotal:39744, ticketOuro:402.76,meta:200,funcs:[{nome:"Gisleide",emoji:"👑",ouro:98.50,valor:39672,gSim:11,gNao:1}]},
    ]
  }
];

/* Mês atual = último da lista */
const MES_ATUAL=MESES[MESES.length-1];
const MES_ANT=MESES.length>1?MESES[MESES.length-2]:null;

/* Derived */
const allTickets=MES_ATUAL.lojas.filter(l=>l.ticketOuro>0).map(l=>l.ticketOuro);
const minT=Math.min(...allTickets);
const maxT=Math.max(...allTickets);
const allFuncs=MESES.flatMap(m=>m.lojas.flatMap(l=>l.funcs.map(f=>({...f,loja:l.n,mes:m.id}))));
const allFuncsMar=MES_ATUAL.lojas.flatMap(l=>l.funcs.map(f=>({...f,loja:l.n})));

const origensRede=[{name:"Frequentador Shopping",count:298},{name:"Já é cliente",count:215},{name:"WhatsApp/Digital",count:130},{name:"Instagram/Google",count:88},{name:"Indicação",count:64},{name:"Outros",count:45}];
const tiposRede=[{name:"Aliança/Alianças",value:245,pct:38},{name:"Outros",value:210,pct:33},{name:"Anel",value:68,pct:11},{name:"Corrente",value:55,pct:9},{name:"Brincos",value:28,pct:4},{name:"Pulseira",value:32,pct:5}];

/* ── UI Helpers ── */
const Card=({title,children,style:st={}})=>(
 <div style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:14,boxShadow:"0 1px 6px rgba(0,0,0,0.05)",...st}}>
  {title&&<div style={{fontSize:10,fontWeight:700,color:JB,marginBottom:10,letterSpacing:"0.07em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:5}}>
   <span style={{display:"inline-block",width:3,height:11,background:GOLD,borderRadius:1}}/>{title}
  </div>}
  {children}
 </div>
);

const KPI=({label,value,sub,accent,badge,note,invertLogic})=>(
 <div style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:"12px 14px",borderTop:`3px solid ${accent||JB}`,boxShadow:"0 1px 4px rgba(0,0,0,0.05)",position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:0,right:0,width:36,height:36,borderRadius:"0 10px 0 36px",background:`${accent||JB}10`}}/>
  {badge&&<div style={{position:"absolute",top:6,right:7,background:badge.c,color:"#fff",fontSize:8,fontWeight:700,padding:"1px 5px",borderRadius:20}}>{badge.t}</div>}
  <div style={{color:MUTED,fontSize:9,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2}}>{label}</div>
  <div style={{color:accent||JB,fontSize:18,fontWeight:800,fontFamily:"'Inter',sans-serif"}}>{value}</div>
  {sub&&<div style={{color:MUTED,fontSize:9,marginTop:1}}>{sub}</div>}
  {note&&<div style={{fontSize:8,color:invertLogic?RED:MUTED,fontStyle:"italic",marginTop:1}}>{note}</div>}
 </div>
);

function MetaBar({l,animated,maxOuro}){
 const ok=l.ouro>=l.meta;
 const pct=Math.min((l.ouro/l.meta)*100,100);
 const superou=l.ouro-l.meta;
 return(
  <div style={{marginBottom:12}}>
   <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
    <span style={{fontSize:11,fontWeight:700,color:TEXT}}>{l.n}</span>
    <div style={{display:"flex",gap:5,alignItems:"center"}}>
     <span style={{fontSize:9,color:MUTED}}>{fmtN(l.ouro)}/{fmtN(l.meta)} gr</span>
     <span style={{fontSize:9,padding:"1px 6px",borderRadius:20,fontWeight:700,background:ok?JBL:"#fde8e8",color:ok?JB:RED}}>{ok?"+":""}{fmtN(superou)} gr</span>
     <span style={{fontSize:10,fontWeight:700,color:ok?JB:RED}}>{(l.ouro/l.meta*100).toFixed(1)}%</span>
    </div>
   </div>
   <div style={{position:"relative",background:"#e8f5f0",borderRadius:5,height:18,overflow:"visible",border:`1px solid ${JBL}`}}>
    <div style={{width:animated?`${pct}%`:"0%",height:"100%",background:ok?`linear-gradient(90deg,${JB},${JB2})`:`linear-gradient(90deg,${RED},#e67e73)`,borderRadius:5,transition:"width 1.1s ease",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:6}}>
     <span style={{color:"#fff",fontWeight:700,fontSize:8}}>{fmtN(l.ouro)} gr</span>
    </div>
    {ok&&<div style={{position:"absolute",top:-5,left:`${(l.meta/Math.max(l.ouro,l.meta))*100}%`,transform:"translateX(-50%)",zIndex:10}}>
     <div style={{background:GOLD,color:"#fff",fontSize:7,fontWeight:700,padding:"1px 3px",borderRadius:2,whiteSpace:"nowrap"}}>{fmtN(l.meta)} gr</div>
     <div style={{width:1.5,height:22,background:GOLD,margin:"1px auto 0"}}/>
    </div>}
   </div>
  </div>
 );
}["01/03",44564,105,11],["02/03",117233,283.5,27],["03/03",133979,316.2,32],["04/03",123688,315.6,34],["05/03",112478,272.2,32],["06/03",155650,379.6,41],["07/03",107386,278.3,25],["08/03",6160,15.6,5],["09/03",66429,185.2,27],["10/03",114827,274.1,27],["11/03",100073,254.4,25],["12/03",37050,91.7,19],["13/03",112249,271.4,36],["14/03",144442,344.7,34],["15/03",4607,13.1,3],["16/03",276364,619.8,47],["17/03",127535,315.6,36],["18/03",120087,273.4,34],["19/03",164048,429.4,26],["20/03",106182,269.5,45],["21/03",99284,256.2,29],["22/03",31954,80.6,9],["23/03",73119,199.3,35],["24/03",127073,318.9,29],["25/03",146761,356.9,45],["26/03",178119,464.7,40],["27/03",84307,221.7,35],["28/03",74247,210.5,20],["29/03",10200,25.8,6],["30/03",124478,331.6,34],["31/03",99213,262.9,28]],
    funil:{"Leads Novos":3838,"Leads Delegados":4378,"Em Atendimento":4129,"1º Contato":2464,"2º Contato":2154,"3º Contato":1630,"Negociação":35,"Remarketing":800,"Agendamento":423,"Reagendamento":61,"Compras Ouro":888,"Compras Prata":114,"Total Compras":1002,"Atend. Finalizados":4820},
    motivos:{"Sem Interesse":733,"Outro Material":186,"Cotação Baixa":174,"Quer Comprar Joias":133,"Mora Longe":132,"Joias Terceiros":13,"Vendeu Concorrente":126,"Não Fechou por Valor":73,"Vender Mais Frente":505},
    marketing:{disparados:2360,compras:28,gramas:334.48,valor:128732},
    tempo:{"Mauá":7,"Cuiabá":12,"Light":13,"Grand Plaza":22,"Boulevard":7,"Poços Caldas":29,"São Bernardo":5,"Suzano":21,"São Caetano":4,"Santos":3,"Brás":14,"Santa Maria":11,"São José SC":45,"Penha":3,"Osasco":2},
    lojas:[
      {n:"GRAND PLAZA",  regiao:"SP ABC",cidade:"Santo André, SP",    ouro:1361.37,valOuro:530050,valTotal:531596,ticketOuro:389.35,meta:800,funcs:[{nome:"Bruna",emoji:"👑",ouro:627.89,valor:256504,gSim:49,gNao:10},{nome:"Emilly",emoji:"⭐",ouro:454.31,valor:166092,gSim:46,gNao:11},{nome:"Rosana",emoji:"🌟",ouro:270.00,valor:104364,gSim:9,gNao:6},{nome:"Priscila",emoji:"💎",ouro:9.17,valor:3091,gSim:0,gNao:0}]},
      {n:"BOULEVARD",    regiao:"SP Capital",cidade:"Santo André, SP",ouro:1073.20,valOuro:446790,valTotal:449112,ticketOuro:416.32,meta:950,funcs:[{nome:"Leila",emoji:"👑",ouro:569.20,valor:230690,gSim:0,gNao:0},{nome:"Aline",emoji:"⭐",ouro:397.90,valor:175805,gSim:0,gNao:0},{nome:"Gisleide",emoji:"🌟",ouro:68.90,valor:27226,gSim:6,gNao:2},{nome:"Rodrigo",emoji:"💎",ouro:28.90,valor:10736,gSim:8,gNao:0}]},
      {n:"LIGHT",        regiao:"SP Capital",cidade:"São Paulo, SP",ouro:1002.00,valOuro:432666,valTotal:433402,ticketOuro:431.80,meta:850,funcs:[{nome:"Acsa",emoji:"👑",ouro:446.20,valor:190544,gSim:24,gNao:17},{nome:"Lígia",emoji:"⭐",ouro:243.90,valor:102352,gSim:42,gNao:4},{nome:"Priscila",emoji:"🌟",ouro:154.00,valor:83163,gSim:0,gNao:0},{nome:"Bruna",emoji:"💎",ouro:149.50,valor:54179,gSim:49,gNao:10}]},
      {n:"CUIABÁ",       regiao:"MT",cidade:"Cuiabá, MT",        ouro:640.20, valOuro:287040,valTotal:288065,ticketOuro:448.36,meta:500,funcs:[{nome:"Maikon",emoji:"👑",ouro:640.20,valor:287041,gSim:18,gNao:17}]},
      {n:"SÃO CAETANO",  regiao:"SP ABC",cidade:"São Caetano do Sul, SP",    ouro:654.80, valOuro:257060,valTotal:258039,ticketOuro:392.58,meta:450,funcs:[{nome:"Michele",emoji:"👑",ouro:363.00,valor:135372,gSim:13,gNao:2},{nome:"Edivania S.",emoji:"⭐",ouro:291.80,valor:121689,gSim:24,gNao:13}]},
      {n:"MAUÁ",         regiao:"SP ABC",cidade:"Mauá, SP",    ouro:707.80, valOuro:250241,valTotal:251057,ticketOuro:353.55,meta:550,funcs:[{nome:"Jessica",emoji:"👑",ouro:301.30,valor:100349,gSim:34,gNao:19},{nome:"Bruna S.",emoji:"⭐",ouro:257.90,valor:97406,gSim:31,gNao:12},{nome:"Michele",emoji:"🌟",ouro:139.30,valor:48767,gSim:13,gNao:2},{nome:"Camile",emoji:"💎",ouro:9.30,valor:3720,gSim:0,gNao:1}]},
      {n:"SÃO BERNARDO", regiao:"SP ABC",cidade:"São Bernardo do Campo, SP",    ouro:609.10, valOuro:235798,valTotal:237610,ticketOuro:387.13,meta:500,funcs:[{nome:"Tamires",emoji:"👑",ouro:333.27,valor:129508,gSim:0,gNao:2},{nome:"Mariana",emoji:"⭐",ouro:172.75,valor:64892,gSim:10,gNao:14},{nome:"Rosana",emoji:"🌟",ouro:103.08,valor:41398,gSim:9,gNao:6}]},
      {n:"PENHA",        regiao:"SP Capital",cidade:"São Paulo, SP",ouro:263.23, valOuro:108044,valTotal:108579,ticketOuro:410.46,meta:200,funcs:[{nome:"Bruna F.",emoji:"👑",ouro:239.86,valor:99643,gSim:10,gNao:9},{nome:"Ítalo",emoji:"⭐",ouro:21.92,valor:7851,gSim:26,gNao:8},{nome:"Acsa",emoji:"🌟",ouro:1.45,valor:551,gSim:24,gNao:17}]},
      {n:"SANTOS",       regiao:"SP Litoral",cidade:"Santos, SP",ouro:304.90, valOuro:109367,valTotal:109367,ticketOuro:358.70,meta:200,funcs:[{nome:"Mari",emoji:"👑",ouro:209.30,valor:77553,gSim:1,gNao:1},{nome:"Raphaela S.",emoji:"⭐",ouro:95.60,valor:31815,gSim:1,gNao:3}]},
      {n:"BRÁS",         regiao:"SP Capital",cidade:"São Paulo, SP",ouro:250.90, valOuro:109339,valTotal:109556,ticketOuro:435.79,meta:200,funcs:[{nome:"Gabriel S.",emoji:"👑",ouro:169.90,valor:73377,gSim:3,gNao:4},{nome:"Gabriela",emoji:"⭐",ouro:81.00,valor:35963,gSim:3,gNao:2}]},
      {n:"SUZANO",       regiao:"SP Grande",cidade:"Suzano, SP", ouro:339.00, valOuro:132828,valTotal:132901,ticketOuro:391.83,meta:350,funcs:[{nome:"Cremilda",emoji:"👑",ouro:165.00,valor:66876,gSim:7,gNao:10},{nome:"Alethea",emoji:"⭐",ouro:98.10,valor:37837,gSim:1,gNao:7},{nome:"Simone S.",emoji:"🌟",ouro:71.90,valor:26716,gSim:8,gNao:9}]},
      {n:"POÇOS CALDAS", regiao:"MG",cidade:"Poços de Caldas, MG",        ouro:358.67, valOuro:148429,valTotal:148691,ticketOuro:413.83,meta:450,funcs:[{nome:"Regiane S.",emoji:"👑",ouro:358.67,valor:148430,gSim:0,gNao:26}]},
      {n:"SANTA MARIA",  regiao:"RS",cidade:"Santa Maria, RS",        ouro:265.00, valOuro:96870, valTotal:97041, ticketOuro:365.55,meta:200,funcs:[{nome:"Luciano",emoji:"👑",ouro:265.00,valor:96871,gSim:0,gNao:7}]},
      {n:"SÃO JOSÉ SC",  regiao:"SP Interior",cidade:"São José dos Campos, SP",ouro:154.88,valOuro:56541, valTotal:57783, ticketOuro:365.07,meta:200,funcs:[{nome:"Regiane",emoji:"👑",ouro:21.23,valor:7544,gSim:0,gNao:0},{nome:"Maria Clara",emoji:"⭐",ouro:9.11,valor:3580,gSim:0,gNao:2},{nome:"Camilly",emoji:"🌟",ouro:6.89,valor:2662,gSim:0,gNao:0}]},
      {n:"OSASCO",       regiao:"SP Grande",cidade:"Osasco, SP", ouro:98.50,  valOuro:39671, valTotal:39744, ticketOuro:402.76,meta:200,funcs:[{nome:"Gisleide",emoji:"👑",ouro:98.50,valor:39672,gSim:11,gNao:1}]},
    ]
  }
];

/* Mês atual = último da lista */
const MES_ATUAL=MESES[MESES.length-1];
const MES_ANT=MESES.length>1?MESES[MESES.length-2]:null;

/* Derived */
const allTickets=MES_ATUAL.lojas.filter(l=>l.ticketOuro>0).map(l=>l.ticketOuro);
const minT=Math.min(...allTickets);
const maxT=Math.max(...allTickets);
const allFuncs=MESES.flatMap(m=>m.lojas.flatMap(l=>l.funcs.map(f=>({...f,loja:l.n,mes:m.id}))));
const allFuncsMar=MES_ATUAL.lojas.flatMap(l=>l.funcs.map(f=>({...f,loja:l.n})));

const origensRede=[{name:"Frequentador Shopping",count:298},{name:"Já é cliente",count:215},{name:"WhatsApp/Digital",count:130},{name:"Instagram/Google",count:88},{name:"Indicação",count:64},{name:"Outros",count:45}];
const tiposRede=[{name:"Aliança/Alianças",value:245,pct:38},{name:"Outros",value:210,pct:33},{name:"Anel",value:68,pct:11},{name:"Corrente",value:55,pct:9},{name:"Brincos",value:28,pct:4},{name:"Pulseira",value:32,pct:5}];

/* ── UI Helpers ── */
const Card=({title,children,style:st={}})=>(
 <div style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:14,boxShadow:"0 1px 6px rgba(0,0,0,0.05)",...st}}>
  {title&&<div style={{fontSize:10,fontWeight:700,color:JB,marginBottom:10,letterSpacing:"0.07em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:5}}>
   <span style={{display:"inline-block",width:3,height:11,background:GOLD,borderRadius:1}}/>{title}
  </div>}
  {children}
 </div>
);

const KPI=({label,value,sub,accent,badge,note,invertLogic})=>(
 <div style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:"12px 14px",borderTop:`3px solid ${accent||JB}`,boxShadow:"0 1px 4px rgba(0,0,0,0.05)",position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:0,right:0,width:36,height:36,borderRadius:"0 10px 0 36px",background:`${accent||JB}10`}}/>
  {badge&&<div style={{position:"absolute",top:6,right:7,background:badge.c,color:"#fff",fontSize:8,fontWeight:700,padding:"1px 5px",borderRadius:20}}>{badge.t}</div>}
  <div style={{color:MUTED,fontSize:9,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2}}>{label}</div>
  <div style={{color:accent||JB,fontSize:18,fontWeight:800,fontFamily:"'Inter',sans-serif"}}>{value}</div>
  {sub&&<div style={{color:MUTED,fontSize:9,marginTop:1}}>{sub}</div>}
  {note&&<div style={{fontSize:8,color:invertLogic?RED:MUTED,fontStyle:"italic",marginTop:1}}>{note}</div>}
 </div>
);

function MetaBar({l,animated,maxOuro}){
 const ok=l.ouro>=l.meta;
 const pct=Math.min((l.ouro/l.meta)*100,100);
 const superou=l.ouro-l.meta;
 return(
  <div style={{marginBottom:12}}>
   <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
    <span style={{fontSize:11,fontWeight:700,color:TEXT}}>{l.n}</span>
    <div style={{display:"flex",gap:5,alignItems:"center"}}>
     <span style={{fontSize:9,color:MUTED}}>{fmtN(l.ouro)}/{fmtN(l.meta)} gr</span>
     <span style={{fontSize:9,padding:"1px 6px",borderRadius:20,fontWeight:700,background:ok?JBL:"#fde8e8",color:ok?JB:RED}}>{ok?"+":""}{fmtN(superou)} gr</span>
     <span style={{fontSize:10,fontWeight:700,color:ok?JB:RED}}>{(l.ouro/l.meta*100).toFixed(1)}%</span>
    </div>
   </div>
   <div style={{position:"relative",background:"#e8f5f0",borderRadius:5,height:18,overflow:"visible",border:`1px solid ${JBL}`}}>
    <div style={{width:animated?`${pct}%`:"0%",height:"100%",background:ok?`linear-gradient(90deg,${JB},${JB2})`:`linear-gradient(90deg,${RED},#e67e73)`,borderRadius:5,transition:"width 1.1s ease",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:6}}>
     <span style={{color:"#fff",fontWeight:700,fontSize:8}}>{fmtN(l.ouro)} gr</span>
    </div>
    {ok&&<div style={{position:"absolute",top:-5,left:`${(l.meta/Math.max(l.ouro,l.meta))*100}%`,transform:"translateX(-50%)",zIndex:10}}>
     <div style={{background:GOLD,color:"#fff",fontSize:7,fontWeight:700,padding:"1px 3px",borderRadius:2,whiteSpace:"nowrap"}}>{fmtN(l.meta)} gr</div>
     <div style={{width:1.5,height:22,background:GOLD,margin:"1px auto 0"}}/>
    </div>}
   </div>
  </div>
 );
}

/* ── RANKING LOJAS ── */
const RANK_CFG=[
 {medal:"🥇",bg:"linear-gradient(135deg,#FFF8E1,#FFF3CD)",border:"#D4AF37",crown:"👑",label:"Campeã"},
 {medal:"🥈",bg:"linear-gradient(135deg,#F5F5F5,#ECECEC)",border:"#9E9E9E",crown:"⭐",label:"Vice"},
 {medal:"🥉",bg:"linear-gradient(135deg,#FFF3E0,#FFE0B2)",border:"#CD7F32",crown:"🌟",label:"3º lugar"},
];
const LOJA_EM={"BOULEVARD":"🏬","LIGHT":"💡","GRAND PLAZA":"🏛️","MAUÁ":"🏢","SÃO BERNARDO":"🏙️","SÃO CAETANO":"🌆","POÇOS CALDAS":"⛲","CUIABÁ":"🌅","SUZANO":"🌿","BRÁS":"🧵","SÃO JOSÉ SC":"🏔️","SANTOS":"⚓","SANTA MARIA":"🌹","PENHA":"🦅","OSASCO":"🏘️"};

function RankingLojas(){
 const [cat,setCat]=useState("valor");
 const lojas=MES_ATUAL.lojas.filter(l=>l.valTotal>0);
 const getRaw=l=>cat==="valor"?l.valTotal:cat==="ouro"?l.ouro:cat==="meta"?l.ouro/l.meta*100:l.ticketOuro;
 const getVal=l=>cat==="valor"?fmt(l.valTotal):cat==="ouro"?fmtN(l.ouro)+" gr":cat==="meta"?(l.ouro/l.meta*100).toFixed(1)+"%":fmt(l.ticketOuro);
 const sorted=cat==="ticket"?[...lojas].sort((a,b)=>a.ticketOuro-b.ticketOuro):[...lojas].sort((a,b)=>getRaw(b)-getRaw(a));
 const maxV=getRaw(sorted[0])||1;
 const top3=sorted.slice(0,3);
 const pod=[top3[1],top3[0],top3[2]];
 const podRk=[2,1,3];
 const [hov,setHov]=useState(null);
 const tsR=id=>({padding:"5px 12px",borderRadius:7,cursor:"pointer",fontSize:10,fontWeight:cat===id?700:500,background:cat===id?JB:"#fff",color:cat===id?"#fff":JB2,border:cat===id?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s"});
 return(
  <div style={{display:"flex",flexDirection:"column",gap:12}}>
   <div style={{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
    {[["valor","💰 Valor"],["ouro","⚜️ Gramas"],["meta","🎯 % Meta"],["ticket","🎫 Ticket"]].map(([id,lb])=><button key={id} style={tsR(id)} onClick={()=>setCat(id)}>{lb}</button>)}
    {cat==="ticket"&&<span style={{marginLeft:"auto",fontSize:9,color:JB,background:JBL,padding:"3px 8px",borderRadius:8,border:`1px solid ${JB2}40`}}>🟢 menor = melhor margem</span>}
   </div>
   <div style={{display:"grid",gridTemplateColumns:"1fr 1.08fr 1fr",gap:10,alignItems:"end"}}>
    {pod.map((l,di)=>{if(!l)return null;
     const rk=podRk[di],cfg=RANK_CFG[rk-1],lift=rk===1?0:rk===2?14:22;
     const pct=(getRaw(l)/maxV*100).toFixed(0);
     const tCol=cat==="ticket"?ticketColor(l.ticketOuro,minT,maxT):"";
     return(
      <div key={l.n} onMouseEnter={()=>setHov(l.n)} onMouseLeave={()=>setHov(null)}
       style={{background:cfg.bg,border:`2px solid ${cfg.border}`,borderRadius:14,padding:"12px 10px",textAlign:"center",boxShadow:hov===l.n?`0 6px 20px ${cfg.border}55`:`0 2px 8px ${cfg.border}25`,transform:hov===l.n?"translateY(-4px)":`translateY(${lift}px)`,transition:"all .22s",cursor:"default"}}>
       <div style={{fontSize:16}}>{cfg.crown}</div>
       <div style={{fontSize:8,fontWeight:700,color:rk===1?"#8B6914":cfg.border,marginBottom:3,letterSpacing:"0.06em",textTransform:"uppercase"}}>{cfg.label}</div>
       <div style={{width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg,${JB},${JB2})`,border:`2.5px solid ${cfg.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,margin:"0 auto 5px"}}>{LOJA_EM[l.n]||"🏪"}</div>
       <div style={{fontFamily:"'Inter',sans-serif",fontSize:13,fontWeight:800,color:TEXT}}>{l.n}</div>
       <div style={{fontSize:8,color:MUTED,marginBottom:5}}>{l.regiao}</div>
       <div style={{fontSize:18,marginBottom:5}}>{cfg.medal}</div>
       <div style={{background:"rgba(255,255,255,0.8)",borderRadius:6,padding:"4px 6px",marginBottom:3}}>
        <div style={{fontSize:13,fontWeight:800,color:cat==="ticket"?tCol:JB}}>{getVal(l)}</div>
        <div style={{fontSize:7,color:MUTED,textTransform:"uppercase",letterSpacing:"0.05em"}}>{["valor","ouro","meta %","ticket"][["valor","ouro","meta","ticket"].indexOf(cat)]}</div>
       </div>
       <div style={{background:"rgba(255,255,255,0.5)",borderRadius:4,height:5,overflow:"hidden"}}>
        <div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${JB},${JB2})`,borderRadius:4}}/>
       </div>
       <div style={{fontSize:7,color:MUTED,marginTop:1}}>{pct}% líder</div>
      </div>
     );
    })}
   </div>
   <Card title={`Ranking — ${["💰 Valor Total","⚜️ Gramas Ouro","🎯 % da Meta","🎫 Ticket Médio"][["valor","ouro","meta","ticket"].indexOf(cat)]} · ${MES_ATUAL.label}`}>
    {cat==="ticket"&&<div style={{fontSize:9,color:TEXT,padding:"5px 8px",background:"#FFF8E1",borderRadius:6,border:`1px solid ${GOLD}40`,marginBottom:8}}>Ticket = valor pago por grama. Quanto menor, melhor a margem de lucro na revenda.</div>}
    <div style={{display:"flex",flexDirection:"column",gap:5}}>
     {sorted.map((l,i)=>{
      const ok=l.ouro>=l.meta;
      const medals=["🥇","🥈","🥉"];
      const barW=cat==="ticket"?(1-(l.ticketOuro-minT)/(maxT-minT))*100:(getRaw(l)/maxV*100);
      const tCol=cat==="ticket"?ticketColor(l.ticketOuro,minT,maxT):`linear-gradient(90deg,${JB},${JB2})`;
      return(
       <div key={l.n} style={{display:"flex",alignItems:"center",gap:7,padding:"7px 9px",borderRadius:8,background:i<3?JBL:"#F7FDFB",border:`1px solid ${i===0?GOLD:i<3?JB2+"40":"#E0EDE6"}`}}>
        <div style={{fontSize:13,width:22,textAlign:"center"}}>{medals[i]||`#${i+1}`}</div>
        <div style={{fontSize:13}}>{LOJA_EM[l.n]||"🏪"}</div>
        <div style={{fontSize:10,fontWeight:700,color:TEXT,flex:1}}>{l.n}</div>
        <div style={{fontSize:9,color:MUTED,minWidth:60}}>{l.regiao}</div>
        <div style={{flex:2,background:"#dceee5",borderRadius:3,height:6,overflow:"hidden"}}>
         <div style={{width:`${barW.toFixed(0)}%`,height:"100%",background:tCol,borderRadius:3}}/>
        </div>
        <div style={{fontSize:11,fontWeight:800,color:cat==="ticket"?tCol:JB,minWidth:80,textAlign:"right"}}>{getVal(l)}</div>
        <span style={{fontSize:8,padding:"1px 5px",borderRadius:10,fontWeight:700,background:ok?JBL:"#fde8e8",color:ok?JB:RED,minWidth:48,textAlign:"center"}}>{(l.ouro/l.meta*100).toFixed(0)}% meta</span>
       </div>
      );
     })}
    </div>
   </Card>
   <FuncDestaqueRede/>
  </div>
 );
}

/* ── FUNCIONÁRIOS ── */
const FUNC_CATS=[
 {id:"ouro",  label:"⚜️ Ouro",   getV:f=>fmtN(f.ouro)+" gr",      getR:f=>f.ouro},
 {id:"valor", label:"💰 Valor",  getV:f=>fmt(f.valor),              getR:f=>f.valor},
 {id:"google",label:"⭐ Google", getV:f=>`${f.gSim||0} aval.`,      getR:f=>f.gSim||0},
];

function Podio({funcs,catId}){
 const cat=FUNC_CATS.find(c=>c.id===catId)||FUNC_CATS[0];
 const sorted=[...funcs].sort((a,b)=>cat.getR(b)-cat.getR(a)).slice(0,3);
 const pod=[sorted[1],sorted[0],sorted[2]];
 const podRk=[2,1,3];
 const maxV=cat.getR(sorted[0])||1;
 const [hov,setHov]=useState(null);
 return(
  <div style={{display:"grid",gridTemplateColumns:sorted.length>=3?"1fr 1.08fr 1fr":sorted.length===2?"1fr 1fr":"1fr",gap:8,alignItems:"end",marginBottom:10}}>
   {pod.map((f,di)=>{if(!f)return null;
    const rk=podRk[di],cfg=RANK_CFG[rk-1],lift=rk===1?0:rk===2?14:22;
    const pct=(cat.getR(f)/maxV*100).toFixed(0);
    return(
     <div key={f.nome} onMouseEnter={()=>setHov(f.nome)} onMouseLeave={()=>setHov(null)}
      style={{background:cfg.bg,border:`2px solid ${cfg.border}`,borderRadius:12,padding:"10px 8px",textAlign:"center",boxShadow:hov===f.nome?`0 6px 18px ${cfg.border}55`:`0 2px 6px ${cfg.border}25`,transform:hov===f.nome?"translateY(-3px)":`translateY(${lift}px)`,transition:"all 0.2s",cursor:"default"}}>
      <div style={{fontSize:14}}>{cfg.crown}</div>
      <div style={{fontSize:7,fontWeight:700,color:rk===1?"#8B6914":cfg.border,marginBottom:2,textTransform:"uppercase"}}>{cfg.label}</div>
      <div style={{width:38,height:38,borderRadius:"50%",background:`linear-gradient(135deg,${JB},${JB2})`,border:`2px solid ${cfg.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,margin:"0 auto 4px"}}>{f.emoji}</div>
      <div style={{fontFamily:"'Inter',sans-serif",fontSize:11,fontWeight:800,color:TEXT}}>{f.nome}</div>
      {f.loja&&<div style={{fontSize:7,color:MUTED,background:JBL,borderRadius:10,padding:"1px 5px",display:"inline-block",marginBottom:3}}>{f.loja}</div>}
      <div style={{fontSize:16,marginBottom:4}}>{cfg.medal}</div>
      <div style={{background:"rgba(255,255,255,0.8)",borderRadius:5,padding:"3px 5px",marginBottom:3}}>
       <div style={{fontSize:11,fontWeight:800,color:catId==="google"?(f.gSim||0)>0?JB:MUTED:JB}}>{cat.getV(f)}</div>
       {catId==="google"&&(f.gSim||0)+(f.gNao||0)>0&&<div style={{fontSize:8,color:MUTED}}>{Math.round((f.gSim||0)/((f.gSim||0)+(f.gNao||0))*100)}% conv.</div>}
      </div>
      {catId==="google"&&(f.gSim||0)+(f.gNao||0)>0&&<div style={{display:"flex",height:5,borderRadius:3,overflow:"hidden",marginBottom:2}}>
       <div style={{flex:f.gSim||0,background:JB,borderRadius:"3px 0 0 3px"}}/>
       <div style={{flex:f.gNao||0,background:"#e0e0e0",borderRadius:"0 3px 3px 0"}}/>
      </div>}
      {catId!=="google"&&<div style={{background:"rgba(255,255,255,0.5)",borderRadius:3,height:4,overflow:"hidden"}}>
       <div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${JB},${JB2})`,borderRadius:3}}/>
      </div>}
     </div>
    );
   })}
  </div>
 );
}

function FuncDestaqueRede(){
 const [catId,setCatId]=useState("ouro");
 const cat=FUNC_CATS.find(c=>c.id===catId)||FUNC_CATS[0];
 const sorted=[...allFuncsMar].sort((a,b)=>cat.getR(b)-cat.getR(a));
 const top=sorted.slice(0,8);
 const maxV=cat.getR(top[0])||1;
 const ts=id=>({padding:"5px 10px",borderRadius:7,cursor:"pointer",fontSize:10,fontWeight:catId===id?700:500,background:catId===id?JB:"#fff",color:catId===id?"#fff":JB2,border:catId===id?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s"});
 return(
  <Card title={`🌟 Funcionário Destaque da Rede — ${MES_ATUAL.label}`}>
   <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap",alignItems:"center"}}>
    {FUNC_CATS.map(c=><button key={c.id} style={ts(c.id)} onClick={()=>setCatId(c.id)}>{c.label}</button>)}
    {(()=>{const totSim=allFuncsMar.reduce((s,f)=>s+(f.gSim||0),0);const totNao=allFuncsMar.reduce((s,f)=>s+(f.gNao||0),0);const conv=totSim+totNao>0?Math.round(totSim/(totSim+totNao)*100):0;return(
     <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:8,padding:"4px 10px",background:JBL,borderRadius:8,border:`1px solid ${JB2}40`}}>
      <div style={{display:"flex",height:7,width:60,borderRadius:3,overflow:"hidden"}}>
       <div style={{flex:totSim,background:JB}}/><div style={{flex:totNao,background:"#e0e0e0"}}/>
      </div>
      <span style={{fontSize:10,color:JB,fontWeight:700}}>⭐ {totSim} aval. Google</span>
      <span style={{fontSize:10,fontWeight:800,color:conv>=60?JB:RED}}>{conv}% conv.</span>
     </div>
    );})()}
   </div>
   <Podio funcs={allFuncsMar} catId={catId}/>
   <div style={{display:"flex",flexDirection:"column",gap:4}}>
    {top.map((f,i)=>{
     const medals=["🥇","🥈","🥉"];
     const barW=(cat.getR(f)/maxV*100);
     return(
      <div key={f.nome+f.loja} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",borderRadius:7,background:i<3?JBL:"#F7FDFB",border:`1px solid ${i===0?GOLD:i<3?JB2+"40":"#E0EDE6"}`}}>
       <div style={{fontSize:12,width:20,textAlign:"center"}}>{medals[i]||`#${i+1}`}</div>
       <div style={{fontSize:13}}>{f.emoji}</div>
       <div style={{flex:1,minWidth:0}}>
        <div style={{fontWeight:700,color:TEXT,fontSize:10}}>{f.nome}</div>
        <div style={{display:"flex",alignItems:"center",gap:4,marginTop:1}}>
         <span style={{fontSize:8,color:MUTED,background:JBL,padding:"0px 4px",borderRadius:8,whiteSpace:"nowrap"}}>{LOJA_EM[f.loja]||"🏪"} {f.loja}</span>
         {catId==="google"&&(f.gSim||0)+(f.gNao||0)>0?<div style={{display:"flex",flex:1,height:5,borderRadius:3,overflow:"hidden"}}>
          <div style={{flex:f.gSim||0,background:JB}}/><div style={{flex:f.gNao||0,background:"#e0e0e0"}}/>
         </div>:<div style={{flex:1,background:"#dceee5",borderRadius:3,height:5,overflow:"hidden"}}>
          <div style={{width:`${barW.toFixed(0)}%`,height:"100%",background:`linear-gradient(90deg,${JB},${JB2})`,borderRadius:3}}/>
         </div>}
        </div>
       </div>
       <div style={{textAlign:"right",flexShrink:0}}>
        <div style={{fontWeight:800,color:JB,fontSize:11}}>{cat.getV(f)}</div>
       </div>
      </div>
     );
    })}
   </div>
  </Card>
 );
}

function FuncLoja({funcs}){
 const [catId,setCatId]=useState("ouro");
 const cat=FUNC_CATS.find(c=>c.id===catId)||FUNC_CATS[0];
 const sorted=[...funcs].filter(f=>cat.getR(f)>0).sort((a,b)=>cat.getR(b)-cat.getR(a));
 const maxV=cat.getR(sorted[0])||1;
 const ts=id=>({padding:"4px 9px",borderRadius:6,cursor:"pointer",fontSize:9,fontWeight:catId===id?700:500,background:catId===id?JB:"#fff",color:catId===id?"#fff":JB2,border:catId===id?`1px solid ${GOLD}`:`1px solid ${GOLD}50`});
 return(
  <div>
   <div style={{display:"flex",gap:5,marginBottom:8}}>
    {FUNC_CATS.map(c=><button key={c.id} style={ts(c.id)} onClick={()=>setCatId(c.id)}>{c.label}</button>)}
   </div>
   {sorted.length>=2&&<Podio funcs={sorted} catId={catId}/>}
   <div style={{display:"flex",flexDirection:"column",gap:4}}>
    {sorted.map((f,i)=>{
     const medals=["🥇","🥈","🥉"];
     const barW=(cat.getR(f)/maxV*100);
     return(
      <div key={f.nome} style={{display:"flex",alignItems:"center",gap:6,padding:"5px 8px",borderRadius:7,background:i<3?JBL:"#F7FDFB",border:`1px solid ${i===0?GOLD:i<3?JB2+"40":"#E0EDE6"}`}}>
       <div style={{fontSize:12,width:20,textAlign:"center"}}>{medals[i]||`#${i+1}`}</div>
       <div style={{fontSize:13}}>{f.emoji}</div>
       <div style={{flex:1}}>
        <div style={{fontWeight:700,color:TEXT,fontSize:10}}>{f.nome}</div>
        {catId==="google"&&(f.gSim||0)+(f.gNao||0)>0?<div style={{display:"flex",height:5,borderRadius:3,overflow:"hidden",marginTop:2}}>
         <div style={{flex:f.gSim||0,background:JB}}/><div style={{flex:f.gNao||0,background:"#e0e0e0"}}/>
        </div>:<div style={{flex:1,background:"#dceee5",borderRadius:3,height:5,overflow:"hidden",marginTop:2}}>
         <div style={{width:`${barW.toFixed(0)}%`,height:"100%",background:`linear-gradient(90deg,${JB},${JB2})`,borderRadius:3}}/>
        </div>}
        {catId==="google"&&(f.gSim||0)+(f.gNao||0)>0&&<div style={{fontSize:8,color:MUTED,marginTop:1}}>{f.gSim||0} aval · {(f.gSim||0)+(f.gNao||0)>0?Math.round((f.gSim||0)/((f.gSim||0)+(f.gNao||0))*100):0}% conv.</div>}
       </div>
       <div style={{fontWeight:800,color:JB,fontSize:11,textAlign:"right"}}>{cat.getV(f)}</div>
      </div>
     );
    })}
   </div>
  </div>
 );
}

/* ── COMPARATIVO ── */
function TabComparativo(){
 const crescVal=calcPct(MES_ATUAL.totalVal,MES_ANT?.totalVal);
 const crescOuro=calcPct(MES_ATUAL.totalOuro,MES_ANT?.totalOuro);
 const evolucao=MESES.map(m=>({mes:m.short,val:m.totalVal,ouro:m.totalOuro,lojas:m.nLojas}));
 const lojaComp=MES_ATUAL.lojas.map(lm=>{
  const lf=MES_ANT?.lojas.find(x=>x.n===lm.n);
  return{...lm,valF:lf?.valTotal||0,ouroF:lf?.ouro||0,isNew:!lf||lf.valTotal===0};
 }).sort((a,b)=>b.valTotal-a.valTotal).filter(l=>l.valTotal>0||l.valF>0);
 const compData=lojaComp.map(l=>({n:l.n.split(' ')[0],mar:l.valTotal,fev:l.valF}));
 return(
  <div style={{display:"flex",flexDirection:"column",gap:12}}>
   <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
    {[
     {label:`Valor Total — ${MES_ATUAL.short}`,val:fmt(MES_ATUAL.totalVal),sub:MES_ANT?`${MES_ANT.short}: ${fmt(MES_ANT.totalVal)}`:null,accent:JB,arr:MES_ANT?arrowFn(MES_ATUAL.totalVal,MES_ANT.totalVal):null},
     {label:`Gramas Ouro — ${MES_ATUAL.short}`,val:fmtN(MES_ATUAL.totalOuro)+" gr",sub:MES_ANT?`${MES_ANT.short}: ${fmtN(MES_ANT.totalOuro)} gr`:null,accent:JB2,arr:MES_ANT?arrowFn(MES_ATUAL.totalOuro,MES_ANT.totalOuro):null},
     {label:"Lojas Ativas",val:`${MES_ATUAL.nLojas} lojas`,sub:MES_ANT?`${MES_ANT.short}: ${MES_ANT.nLojas} lojas`:null,accent:GOLD,arr:MES_ANT?arrowFn(MES_ATUAL.nLojas,MES_ANT.nLojas):null},
    ].map((k,i)=>(
     <div key={i} style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:"12px 14px",borderTop:`3px solid ${k.accent}`,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>
      <div style={{fontSize:9,color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2}}>{k.label}</div>
      <div style={{fontSize:17,fontWeight:800,color:k.accent,fontFamily:"'Inter',sans-serif"}}>{k.val}</div>
      {k.sub&&<div style={{fontSize:9,color:MUTED,marginTop:1,display:"flex",alignItems:"center",gap:3}}>{k.sub}{k.arr&&<span style={{color:k.arr.color,fontWeight:700,fontSize:9}}>{k.arr.icon}{k.arr.txt}</span>}</div>}
     </div>
    ))}
    <div style={{background:`linear-gradient(135deg,${JB},${JB2})`,borderRadius:10,padding:"12px 14px",color:"#fff",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}>
     <div style={{fontSize:9,color:"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2}}>{MES_ANT?`Crescimento ${MES_ANT.short}→${MES_ATUAL.short}`:"Mês Atual"}</div>
     <div style={{fontSize:24,fontWeight:900,fontFamily:"'Inter',sans-serif",color:GOLD2}}>{MES_ANT?`+${crescVal}%`:MES_ATUAL.short}</div>
     {MES_ANT&&<div style={{fontSize:9,color:"rgba(255,255,255,0.7)"}}>+R$ {fmtN((MES_ATUAL.totalVal-MES_ANT.totalVal)/1000)}k em valor</div>}
    </div>
   </div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1.1fr 1fr",gap:12}}>
    <Card title="📈 Evolução Mensal — Valor Total">
     <div style={{fontSize:9,color:MUTED,marginBottom:6,padding:"4px 7px",background:"#FFF8E1",borderRadius:5,border:`1px solid ${GOLD}40`}}>📌 Gráfico anual — novos meses adicionados automaticamente</div>
     <ResponsiveContainer width="100%" height={170}>
      <LineChart data={evolucao}>
       <CartesianGrid strokeDasharray="3 3" stroke="#E0F0E8"/>
       <XAxis dataKey="mes" tick={{fill:MUTED,fontSize:10}} tickLine={false}/>
       <YAxis tick={{fill:MUTED,fontSize:10}} tickLine={false} axisLine={false} tickFormatter={v=>`R$${Math.round(v/1000)}k`}/>
       <Tooltip formatter={v=>[fmt(v),"Valor"]}/>
       <Line type="monotone" dataKey="val" stroke={JB} strokeWidth={3} dot={{r:6,fill:JB,stroke:"#fff",strokeWidth:2}} activeDot={{r:8,fill:GOLD}}/>
      </LineChart>
     </ResponsiveContainer>
    </Card>
    <Card title="⚜️ Evolução — Gramas de Ouro">
     <ResponsiveContainer width="100%" height={170}>
      <BarChart data={evolucao}>
       <CartesianGrid strokeDasharray="3 3" stroke="#E0F0E8"/>
       <XAxis dataKey="mes" tick={{fill:MUTED,fontSize:10}} tickLine={false}/>
       <YAxis tick={{fill:MUTED,fontSize:10}} tickLine={false} axisLine={false} tickFormatter={v=>v+"gr"}/>
       <Tooltip formatter={v=>[fmtN(v)+" gr","Ouro"]}/>
       <Bar dataKey="ouro" radius={[4,4,0,0]}>
        {evolucao.map((_,i)=><Cell key={i} fill={i===evolucao.length-1?JB:JBL} stroke={i===evolucao.length-1?GOLD:"none"} strokeWidth={1.5}/>)}
       </Bar>
      </BarChart>
     </ResponsiveContainer>
    </Card>
   </div>

   <GraficoDiario/>
   <Card title={`🏪 Comparativo por Loja${MES_ANT?` — ${MES_ANT.short} vs ${MES_ATUAL.short}`:""}`}>
    <ResponsiveContainer width="100%" height={250}>
     <BarChart data={compData} margin={{left:0}}>
      <CartesianGrid strokeDasharray="3 3" stroke="#E0F0E8"/>
      <XAxis dataKey="n" tick={{fill:TEXT,fontSize:9}} tickLine={false} angle={-20} textAnchor="end" height={36}/>
      <YAxis tick={{fill:MUTED,fontSize:9}} tickLine={false} axisLine={false} tickFormatter={v=>`R$${Math.round(v/1000)}k`}/>
      <Tooltip formatter={v=>[fmt(v)]}/>
      {MES_ANT&&<Bar dataKey="fev" name={MES_ANT.short} fill={JBL} stroke={JB2} strokeWidth={1} radius={[3,3,0,0]}/>}
      <Bar dataKey="mar" name={MES_ATUAL.short} fill={JB} radius={[3,3,0,0]}/>
     </BarChart>
    </ResponsiveContainer>
   </Card>
   <Card title="📊 Crescimento por Loja">
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
     {lojaComp.map((l,i)=>{
      const crescL=l.valF>0?calcPct(l.valTotal,l.valF):null;
      return(
       <div key={l.n} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",borderRadius:7,background:i%2===0?"#F7FDFB":"#fff",border:`1px solid ${JBL}`}}>
        <div style={{fontSize:9,fontWeight:700,color:TEXT,flex:1}}>{l.n}{l.isNew&&<span style={{fontSize:7,background:GOLD,color:"#fff",borderRadius:8,padding:"0px 4px",marginLeft:3}}>NOVA</span>}</div>
        <div style={{textAlign:"right",minWidth:65}}>
         <div style={{fontSize:10,fontWeight:700,color:JB}}>{fmt(l.valTotal)}</div>
         {l.valF>0&&<div style={{fontSize:8,color:MUTED}}>{fmt(l.valF)}</div>}
        </div>
        <div style={{minWidth:55,textAlign:"center"}}>
         {crescL!==null?<span style={{fontSize:9,fontWeight:700,color:parseFloat(crescL)>=0?JB:RED,background:(parseFloat(crescL)>=0?JB:RED)+"15",padding:"1px 5px",borderRadius:8}}>{parseFloat(crescL)>=0?"▲":"▼"} {Math.abs(crescL)}%</span>:<span style={{fontSize:8,color:MUTED}}>Nova</span>}
        </div>
       </div>
      );
     })}
    </div>
   </Card>
  </div>
 );
}

/* ── FUNIL CRM ── */
function TabFunil(){
 const [mesIdx,setMesIdx]=useState(MESES.length-1);
 const D=MESES[mesIdx];
 const Dp=mesIdx>0?MESES[mesIdx-1]:null;
 

 const motivosData=Object.entries(D.motivos).sort((a,b)=>b[1]-a[1]).map(([k,v])=>({n:k,v}));
 const totalM=motivosData.reduce((s,m)=>s+m.v,0);
 const sugestoes=[
  {icon:"📚",motivo:"Sem Interesse / Cotação Baixa",acao:"Conteúdo educativo sobre valorização do ouro. Nutrir com comparativos de mercado.",cor:JB},
  {icon:"⚡",motivo:"Vendeu para Concorrente",acao:"Protocolo de urgência: resposta em até 5 min. Avaliação instantânea e transparência.",cor:RED},
  {icon:"⏰",motivo:"Quer Vender Mais para Frente",acao:"Nutrição automática com alertas de cotação e remarketing periódico.",cor:AMBAR},
  {icon:"📍",motivo:"Mora Longe",acao:"Mapear CEPs e criar rotas de atendimento externo. Avaliar novas unidades.",cor:GOLD},
  {icon:"💡",motivo:"Não Fechou por Valor",acao:"Treinar equipe em argumentação de valor. Criar política de contraoferta.",cor:JB2},
  {icon:"🤖",motivo:"Automação Geral",acao:"Follow-up em 24h. 5 contatos antes de arquivar. Conversão pode dobrar com nutrição.",cor:"#2D9E87"},
 ];
 const STG_L=[["Leads Novos","🎯",JB],["Leads Delegados","📋",JB],["Em Atendimento","💬",JB2],["1º Contato","📞",JB2],["2º Contato","📞",JB2],["3º Contato","📞","#2D9E87"],["Negociação","🤝",AMBAR],["Remarketing","🔄",AMBAR],["Agendamento","📅",GOLD],["Total Compras","✅",JB]];

 return(
  <div style={{display:"flex",flexDirection:"column",gap:12}}>
   <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
    {MESES.map((m,i)=><button key={m.id} onClick={()=>setMesIdx(i)} style={{padding:"5px 12px",borderRadius:7,cursor:"pointer",fontSize:10,fontWeight:mesIdx===i?700:400,background:mesIdx===i?JB:"#fff",color:mesIdx===i?"#fff":JB2,border:mesIdx===i?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s"}}>{m.label}</button>)}
    <div style={{marginLeft:"auto",display:"flex",gap:14,fontSize:11,color:MUTED}}>
     <span>Conversão: <strong style={{color:JB}}>{((D.funil["Total Compras"]/D.funil["Leads Novos"])*100).toFixed(2)}%</strong></span>
     <span>Leads: <strong style={{color:JB}}>{D.funil["Leads Novos"]}</strong></span>
     {Dp&&<span style={{color:arrowFn(D.funil["Leads Novos"],Dp.funil["Leads Novos"]).color}}>{arrowFn(D.funil["Leads Novos"],Dp.funil["Leads Novos"]).icon} vs {Dp.short}</span>}
    </div>
   </div>
   <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>

    {/* ── FUNIL VISUAL TRAPÉZIO ── */}
    <Card title={`🔽 Funil Visual — ${D.label}`}>
     <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:0,padding:"4px 0"}}>
      {(()=>{
       const CRS=[["#6C63FF","#8B5CF6"],["#3B82F6","#60A5FA"],["#10B981","#34D399"],["#F59E0B","#FCD34D"],["#F97316","#FB923C"],["#EF4444","#F87171"],["#EC4899","#F472B6"],["#8B5CF6","#A78BFA"],["#059669","#10B981"]];
       const stages=["Leads Novos","Leads Delegados","Em Atendimento","1º Contato","2º Contato","3º Contato","Negociação","Remarketing","Total Compras"].map((s,i)=>({s,cor:CRS[i]}));
       const maxV2=D.funil[stages[0].s]||1;
       return stages.map((f,i)=>{
        const val=D.funil[f.s]||0;
        const pct=(val/maxV2);
        const w=30+70*pct;
        const valP=Dp?Dp.funil[f.s]||0:null;
        const diff=valP?val-valP:null;
        return(
         <div key={f.s} style={{width:"100%",display:"flex",justifyContent:"center",marginBottom:2}}>
          <div style={{width:`${w}%`,background:`linear-gradient(135deg,${f.cor[0]},${f.cor[1]})`,borderRadius:4,padding:"5px 8px",display:"flex",alignItems:"center",justifyContent:"space-between",minHeight:26,boxShadow:"0 2px 6px rgba(0,0,0,0.18)",transition:"width .3s ease"}}>
           <span style={{fontSize:8,color:"rgba(255,255,255,0.9)",fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"55%"}}>{f.s}</span>
           <div style={{flexShrink:0,display:"flex",alignItems:"center",gap:3}}>
            <span style={{fontSize:11,fontWeight:800,color:"#fff"}}>{val.toLocaleString("pt-BR")}</span>
            {diff!==null&&<span style={{fontSize:8,color:diff>=0?"#bbf7d0":"#fecaca"}}>{diff>=0?"▲":"▼"}{Math.abs(diff)}</span>}
           </div>
          </div>
         </div>
        );
       });
      })()}
     </div>
     <div style={{marginTop:8,padding:"6px 10px",background:JBL,borderRadius:7,border:`1px solid ${JB2}30`,display:"flex",justifyContent:"space-between",fontSize:10}}>
      <span>Conversão: <strong style={{color:JB}}>{((D.funil["Total Compras"]/D.funil["Leads Novos"])*100).toFixed(2)}%</strong></span>
      <span>Compras: <strong style={{color:JB}}>{D.funil["Total Compras"]}</strong></span>
     </div>
    </Card>


    
    {/* ── FUNIL BARRAS ── */}
    <Card title="📊 Etapas Detalhadas">
     <div style={{display:"flex",flexDirection:"column",gap:4}}>
      {(()=>{const mxVal=Math.max(...STG_L.map(([s])=>D.funil[s]||0));return STG_L.map(([s,icon,cor])=>{
       const val=D.funil[s]||0;
       const valP=Dp?Dp.funil[s]||0:null;
       const w=Math.max((val/mxVal)*100,2);
       const a=valP?arrowFn(val,valP):null;
       return(
        <div key={s} style={{display:"flex",alignItems:"center",gap:5}}>
         <div style={{width:105,fontSize:9,color:TEXT,textAlign:"right",flexShrink:0}}>{icon} {s}</div>
         <div style={{flex:1,background:"#F0FAF6",borderRadius:4,height:24,overflow:"hidden"}}>
          <div style={{width:`${w}%`,height:"100%",background:cor,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:6,transition:"width .8s ease"}}>
           <span style={{color:"#fff",fontWeight:700,fontSize:10}}>{val.toLocaleString("pt-BR")}</span>
          </div>
         </div>
         {a&&<span style={{fontSize:8,fontWeight:700,color:a.color,width:40,textAlign:"right",flexShrink:0}}>{a.icon}{a.txt}</span>}
        </div>
       );
      })})()}
     </div>
     <div style={{marginTop:8,padding:"6px 9px",background:JBL,borderRadius:7,border:`1px solid ${JB2}30`,display:"flex",justifyContent:"space-between",fontSize:10}}>
      <span>Leads→Compra: <strong style={{color:JB}}>{((D.funil["Total Compras"]/D.funil["Leads Novos"])*100).toFixed(2)}%</strong></span>
      <span>Finalizados: <strong style={{color:JB}}>{D.funil["Atend. Finalizados"]}</strong></span>
      <span>Remarketing: <strong style={{color:AMBAR}}>{D.funil["Remarketing"]}</strong></span>
     </div>
    </Card>

{/* ── MOTIVOS ── */}
    <div style={{display:"flex",flexDirection:"column",gap:10}}>
     <Card title="❌ Motivos de Perda">
      <div style={{display:"flex",flexDirection:"column",gap:5}}>
       {motivosData.map((m,i)=>{
        const w=(m.v/motivosData[0].v*100).toFixed(0);
        const prevV=Dp?Dp.motivos[m.n]:null;
        const a=prevV?arrowFn(m.v,prevV,true):null;
        return(
         <div key={m.n}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:1}}>
           <span style={{fontSize:9,color:TEXT}}>{m.n}</span>
           <div style={{display:"flex",alignItems:"center",gap:3}}>
            <span style={{fontSize:9,fontWeight:700,color:RED}}>{m.v}</span>
            <span style={{fontSize:8,color:MUTED}}>{((m.v/totalM)*100).toFixed(0)}%</span>
            {a&&<span style={{fontSize:8,fontWeight:700,color:a.color}}>{a.icon}</span>}
           </div>
          </div>
          <div style={{background:"#fde8e8",borderRadius:3,height:6,overflow:"hidden"}}>
           <div style={{width:`${w}%`,height:"100%",background:i===0?RED:"#e88080",borderRadius:3}}/>
          </div>
         </div>
        );
       })}
      </div>
      <div style={{marginTop:6,fontSize:9,color:MUTED,textAlign:"right"}}>Total: <strong style={{color:RED}}>{totalM}</strong></div>
     </Card>
    </div>
   </div>
   <Card title="💡 Plano de Ação">
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7}}>
     {sugestoes.map((s,i)=>(
      <div key={i} style={{padding:"8px 9px",background:JBL,borderRadius:7,borderLeft:`3px solid ${s.cor}`}}>
       <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:3}}>
        <span style={{fontSize:13}}>{s.icon}</span>
        <div style={{fontSize:8,fontWeight:700,color:s.cor}}>{s.motivo}</div>
       </div>
       <div style={{fontSize:9,color:TEXT,lineHeight:1.4}}>{s.acao}</div>
      </div>
     ))}
    </div>
   </Card>
  </div>
 );
}

/* ── MARKETING ── */
function TabMarketing(){
 const [mesIdx,setMesIdx]=useState(MESES.length-1);
 const D=MESES[mesIdx];
 const Dp=mesIdx>0?MESES[mesIdx-1]:null;
 const mk=D.marketing,mkP=Dp?.marketing;
 const conv=((mk.compras/mk.disparados)*100).toFixed(2);
 const evolMk=MESES.map(m=>({mes:m.short,disparados:m.marketing.disparados,compras:m.marketing.compras,gramas:m.marketing.gramas,valor:m.marketing.valor}));
 const metrics=[
  {label:"Disparos",fev:mkP?.disparados,mar:mk.disparados,icon:"📤",accent:BLUE||JB},
  {label:"Compras",fev:mkP?.compras,mar:mk.compras,icon:"✅",accent:JB},
  {label:"Gramas Ouro",fev:mkP?.gramas,mar:mk.gramas,icon:"⚜️",accent:JB2,suffix:" gr"},
  {label:"Valor em Compras",fev:mkP?.valor,mar:mk.valor,icon:"💰",accent:GOLD,isCurr:true},
  {label:"Taxa de Conversão",fev:mkP?(mkP.compras/mkP.disparados*100):null,mar:parseFloat(conv),icon:"🎯",accent:JB,suffix:"%"},
  {label:"Valor por Disparo",fev:mkP?Math.round(mkP.valor/mkP.disparados):null,mar:Math.round(mk.valor/mk.disparados),icon:"📊",accent:JB2,isCurr:true},
 ];
 return(
  <div style={{display:"flex",flexDirection:"column",gap:12}}>
   <div style={{display:"flex",gap:6,marginBottom:2}}>
    {MESES.map((m,i)=><button key={m.id} onClick={()=>setMesIdx(i)} style={{padding:"5px 12px",borderRadius:7,cursor:"pointer",fontSize:10,fontWeight:mesIdx===i?700:400,background:mesIdx===i?JB:"#fff",color:mesIdx===i?"#fff":JB2,border:mesIdx===i?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s"}}>{m.label}</button>)}
   </div>
   <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
    {metrics.map((m,i)=>{
     const a=m.fev?arrowFn(m.mar,m.fev):null;
     return(
      <div key={i} style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:"12px 14px",borderLeft:`4px solid ${m.accent}`,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>
       <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div>
         <div style={{fontSize:9,color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:3}}>{m.label}</div>
         <div style={{fontSize:19,fontWeight:800,color:m.accent,fontFamily:"'Inter',sans-serif"}}>{m.isCurr?fmt(m.mar):fmtN(m.mar)}{m.suffix||""}</div>
         {m.fev&&<div style={{fontSize:9,color:MUTED,marginTop:1}}>{Dp?.short}: {m.isCurr?fmt(m.fev):fmtN(m.fev)}{m.suffix||""}</div>}
        </div>
        <div style={{textAlign:"center"}}>
         <div style={{fontSize:18}}>{m.icon}</div>
         {a&&<div style={{fontSize:9,fontWeight:700,color:a.color,marginTop:3}}>{a.icon} {a.txt}</div>}
        </div>
       </div>
      </div>
     );
    })}
   </div>
   <div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:12}}>
    <Card title="📤 Disparos vs Compras">
     <ResponsiveContainer width="100%" height={190}>
      <BarChart data={evolMk}>
       <CartesianGrid strokeDasharray="3 3" stroke="#E0F0E8"/>
       <XAxis dataKey="mes" tick={{fill:MUTED,fontSize:10}} tickLine={false}/>
       <YAxis yAxisId="left" tick={{fill:MUTED,fontSize:10}} tickLine={false} axisLine={false}/>
       <YAxis yAxisId="right" orientation="right" tick={{fill:AMBAR,fontSize:10}} tickLine={false} axisLine={false}/>
       <Tooltip/>
       <Bar yAxisId="left" dataKey="disparados" name="Disparados" fill={JBL} stroke={JB2} strokeWidth={1} radius={[4,4,0,0]}/>
       <Bar yAxisId="right" dataKey="compras" name="Compras" fill={GOLD} radius={[4,4,0,0]}/>
      </BarChart>
     </ResponsiveContainer>
    </Card>
    <Card title="💰 Valor Gerado pelo Marketing">
     <ResponsiveContainer width="100%" height={190}>
      <LineChart data={evolMk}>
       <CartesianGrid strokeDasharray="3 3" stroke="#E0F0E8"/>
       <XAxis dataKey="mes" tick={{fill:MUTED,fontSize:10}} tickLine={false}/>
       <YAxis tick={{fill:MUTED,fontSize:10}} tickLine={false} axisLine={false} tickFormatter={v=>`R$${Math.round(v/1000)}k`}/>
       <Tooltip formatter={v=>[fmt(v),"Valor"]}/>
       <Line type="monotone" dataKey="valor" stroke={GOLD} strokeWidth={3} dot={{r:6,fill:GOLD,stroke:"#fff",strokeWidth:2}}/>
      </LineChart>
     </ResponsiveContainer>
     {Dp&&<div style={{marginTop:6,padding:"5px 8px",background:"#FFF8E1",borderRadius:6,border:`1px solid ${GOLD}40`,fontSize:9,color:TEXT}}>
      ROI {D.short} vs {Dp.short}: <strong style={{color:GOLD}}>+{calcPct(mk.valor,mkP.valor)}%</strong> — de {fmt(mkP.valor)} para {fmt(mk.valor)}
     </div>}
    </Card>
   </div>
  </div>
 );
}

/* ── TEMPO RESPOSTA ── */
function TabTempo(){
 const [mesIdx,setMesIdx]=useState(MESES.length-1);
 const D=MESES[mesIdx];
 const Dp=mesIdx>0?MESES[mesIdx-1]:null;
 const tempoData=Object.entries(D.tempo).filter(([,v])=>v>0).sort((a,b)=>a[1]-b[1]).map(([loja,min])=>{
  const fevMin=Dp?Dp.tempo[loja]||0:0;
  const cor=min<=5?JB:min<=15?GOLD:min<=30?AMBAR:RED;
  const status=min<=5?"🟢":min<=15?"🟡":min<=30?"🟠":"🔴";
  return{loja,min,fevMin,cor,status};
 });
 const media=(tempoData.reduce((s,t)=>s+t.min,0)/tempoData.length||0).toFixed(0);
 const criticos=tempoData.filter(t=>t.min>30).length;
 return(
  <div style={{display:"flex",flexDirection:"column",gap:12}}>
   <div style={{display:"flex",gap:6,marginBottom:2}}>
    {MESES.map((m,i)=><button key={m.id} onClick={()=>setMesIdx(i)} style={{padding:"5px 12px",borderRadius:7,cursor:"pointer",fontSize:10,fontWeight:mesIdx===i?700:400,background:mesIdx===i?JB:"#fff",color:mesIdx===i?"#fff":JB2,border:mesIdx===i?`1.5px solid ${GOLD}`:`1px solid ${GOLD}50`,transition:"all .15s"}}>{m.label}</button>)}
   </div>
   <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
    {[
     {label:`Média Geral — ${D.short}`,val:media+" min",accent:AMBAR,sub:"Tempo médio de resposta"},
     {label:"Mais Rápida",val:`${tempoData[0]?.loja} ${tempoData[0]?.min}m`,accent:JB2,sub:"Melhor SLA"},
     {label:"Excelentes ≤5 min",val:`${tempoData.filter(t=>t.min<=5).length} lojas`,accent:JB,sub:"SLA ideal"},
     {label:"Críticas >30 min",val:`${criticos} loja${criticos!==1?"s":""}`,accent:criticos>0?RED:JB,sub:criticos>0?"Ação imediata":"Sem críticas"},
    ].map((k,i)=>(
     <div key={i} style={{background:"#fff",border:`1px solid ${GOLD}50`,borderRadius:10,padding:"12px 14px",borderTop:`3px solid ${k.accent}`,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>
      <div style={{fontSize:9,color:MUTED,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2}}>{k.label}</div>
      <div style={{fontSize:16,fontWeight:800,color:k.accent,fontFamily:"'Inter',sans-serif"}}>{k.val}</div>
      <div style={{fontSize:9,color:MUTED,marginTop:1}}>{k.sub}</div>
     </div>
    ))}
   </div>
   <div style={{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:12}}>
    <Card title={`⏱️ Tempo de Resposta por Unidade — ${D.label}`}>
     <div style={{fontSize:9,color:MUTED,marginBottom:8,padding:"4px 7px",background:"#FFF8E1",borderRadius:5,border:`1px solid ${GOLD}40`}}>🟢 ≤5 min: Excelente &nbsp;|&nbsp; 🟡 6–15: Atenção &nbsp;|&nbsp; 🟠 16–30: Alto &nbsp;|&nbsp; 🔴 >30: Crítico</div>
     <div style={{display:"flex",flexDirection:"column",gap:6}}>
      {tempoData.map((t,i)=>{
       const maxMin=Math.max(...tempoData.map(x=>x.min));
       const barW=Math.min((t.min/maxMin)*100,100);
       const melhorou=t.fevMin>0&&t.min<t.fevMin;
       const piorou=t.fevMin>0&&t.min>t.fevMin;
       return(
        <div key={t.loja}>
         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:1}}>
          <div style={{display:"flex",alignItems:"center",gap:4}}>
           <span style={{fontSize:10}}>{t.status}</span>
           <span style={{fontSize:10,fontWeight:700,color:TEXT}}>{t.loja}</span>
           {melhorou&&Dp&&<span style={{fontSize:7,color:JB,background:JBL,padding:"0px 4px",borderRadius:7}}>▼ Melhorou</span>}
           {piorou&&Dp&&<span style={{fontSize:7,color:RED,background:"#fde8e8",padding:"0px 4px",borderRadius:7}}>▲ Piorou</span>}
          </div>
          <div style={{display:"flex",gap:6,fontSize:9}}>
           {t.fevMin>0&&Dp&&<span style={{color:MUTED}}>{Dp.short}: {t.fevMin}m</span>}
           <span style={{fontWeight:700,color:t.cor}}>{t.min} min</span>
          </div>
         </div>
         <div style={{background:"#f0f9f5",borderRadius:3,height:9,overflow:"hidden"}}>
          <div style={{width:`${barW}%`,height:"100%",background:t.cor,borderRadius:3}}/>
         </div>
        </div>
       );
      })}
     </div>
    </Card>
    <div style={{display:"flex",flexDirection:"column",gap:10}}>
     {Dp&&<Card title={`📊 Comparativo ${Dp.short} vs ${D.short}`}>
      <ResponsiveContainer width="100%" height={180}>
       <BarChart data={tempoData.filter(t=>t.fevMin>0)} layout="vertical" margin={{left:5}}>
        <XAxis type="number" tick={{fill:MUTED,fontSize:9}} tickLine={false} tickFormatter={v=>v+"m"}/>
        <YAxis type="category" dataKey="loja" tick={{fill:TEXT,fontSize:9}} tickLine={false} width={80}/>
        <Tooltip formatter={v=>v+" min"}/>
        <Bar dataKey="fevMin" name={Dp.short} fill={JBL} stroke={JB2} strokeWidth={1} radius={[0,3,3,0]}/>
        <Bar dataKey="min" name={D.short} radius={[0,3,3,0]}>
         {tempoData.filter(t=>t.fevMin>0).map((t,i)=><Cell key={i} fill={t.cor}/>)}
        </Bar>
       </BarChart>
      </ResponsiveContainer>
     </Card>}
     <Card title="🎯 SLA — Metas">
      {[
       {meta:"Meta ideal",val:"≤ 5 min",ok:parseInt(media)<=5,desc:"Resposta imediata"},
       {meta:"Meta aceitável",val:"≤ 15 min",ok:parseInt(media)<=15,desc:"Até 15 minutos"},
       {meta:`Média ${D.short}`,val:`${media} min`,ok:parseInt(media)<=15,desc:"Média de todas as unidades"},
      ].map((m,i)=>(
       <div key={i} style={{display:"flex",alignItems:"center",gap:7,padding:"5px 7px",borderRadius:6,background:m.ok?JBL:"#fde8e8",marginBottom:4}}>
        <span style={{fontSize:12}}>{m.ok?"✅":"⚠️"}</span>
        <div><div style={{fontSize:9,fontWeight:700,color:m.ok?JB:RED}}>{m.meta}: {m.val}</div><div style={{fontSize:8,color:MUTED}}>{m.desc}</div></div>
       </div>
      ))}
     </Card>
    </div>
   </div>
  </div>
 );
}

/* ── APP ── */
const origensData=[{name:"Freq. Shopping",count:298},{name:"Já é cliente",count:215},{name:"WhatsApp",count:130},{name:"Instagram/Google",count:88},{name:"Indicação",count:64},{name:"Outros",count:45}];

/* ── Localidades & Regiões ── */
function RegiaoPanel({lojas}){
 const byRegiao={};
 lojas.forEach(l=>{
  if(!l.valTotal)return;
  if(!byRegiao[l.regiao])byRegiao[l.regiao]={regiao:l.regiao,val:0,ouro:0,lojas:[]};
  byRegiao[l.regiao].val+=l.valTotal;
  byRegiao[l.regiao].ouro+=l.ouro;
  byRegiao[l.regiao].lojas.push(l.n);
 });
 const regioes=Object.values(byRegiao).sort((a,b)=>b.val-a.val);
 const maxVal=regioes[0]?.val||1;

 const byCidade={};
 lojas.forEach(l=>{
  if(!l.valTotal)return;
  const key=l.cidade||l.regiao;
  if(!byCidade[key])byCidade[key]={cidade:key,regiao:l.regiao,val:0,ouro:0};
  byCidade[key].val+=l.valTotal;
  byCidade[key].ouro+=l.ouro;
 });
 const cidades=Object.values(byCidade).sort((a,b)=>b.val-a.val);
 const maxCid=cidades[0]?.val||1;

 return(
  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
   <Card title="🗺️ Volume por Região">
    <div style={{display:"flex",flexDirection:"column",gap:7}}>
     {regioes.map((r,i)=>{
      const barW=(r.val/maxVal*100).toFixed(0);
      return(
       <div key={r.regiao}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
         <div>
          <span style={{fontSize:10,fontWeight:700,color:TEXT}}>{r.regiao}</span>
          <span style={{fontSize:8,color:MUTED,marginLeft:5}}>{r.lojas.length} loja{r.lojas.length>1?"s":""}</span>
         </div>
         <div style={{textAlign:"right"}}>
          <div style={{fontSize:10,fontWeight:700,color:JB}}>{fmt(r.val)}</div>
          <div style={{fontSize:8,color:MUTED}}>{fmtN(r.ouro)} gr</div>
         </div>
        </div>
        <div style={{background:"#e8f5f0",borderRadius:4,height:10,overflow:"hidden"}}>
         <div style={{width:`${barW}%`,height:"100%",background:COLORS[i%COLORS.length],borderRadius:4}}/>
        </div>
        <div style={{display:"flex",gap:4,marginTop:2,flexWrap:"wrap"}}>
         {r.lojas.map(n=><span key={n} style={{fontSize:7,background:JBL,color:JB,padding:"0px 4px",borderRadius:6,border:`1px solid ${JB2}30`}}>{n}</span>)}
        </div>
       </div>
      );
     })}
    </div>
   </Card>
   <Card title="📍 Localidades com Mais Compras">
    <div style={{display:"flex",flexDirection:"column",gap:6}}>
     {cidades.map((c,i)=>{
      const barW=(c.val/maxCid*100).toFixed(0);
      const medals=["🥇","🥈","🥉"];
      return(
       <div key={c.cidade} style={{padding:"6px 9px",background:i<3?JBL:"#F7FDFB",borderRadius:8,border:`1px solid ${i===0?GOLD:i<3?JB2+"40":"#E0EDE6"}`}}>
        <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
         <span style={{fontSize:i<3?13:10}}>{medals[i]||`#${i+1}`}</span>
         <div style={{flex:1}}>
          <div style={{fontSize:10,fontWeight:700,color:TEXT}}>{c.cidade}</div>
          <div style={{fontSize:8,color:MUTED}}>{c.regiao}</div>
         </div>
         <div style={{textAlign:"right"}}>
          <div style={{fontSize:10,fontWeight:700,color:JB}}>{fmt(c.val)}</div>
          <div style={{fontSize:8,color:MUTED}}>{fmtN(c.ouro)} gr</div>
         </div>
        </div>
        <div style={{background:"#dceee5",borderRadius:3,height:6,overflow:"hidden"}}>
         <div style={{width:`${barW}%`,height:"100%",background:COLORS[i%COLORS.length],borderRadius:3}}/>
        </div>
       </div>
      );
     })}
    </div>
   </Card>
  </div>
 );
}
