var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["Movies <span class='emoji'> &#128250;</span>","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title:["Please select category"],
        options:['Hollywood','Bollywood','Web Series','Others'],
        url : {
            
        }
    },
    
    news: {
        title:["Today's Top  Headlines"],
        options:["The latest international climate summit has led to groundbreaking agreements on reducing carbon emissions and investing in sustainable technologies, aiming to combat climate change more effectively.","Significant progress in artificial intelligence has been announced, with new developments in generative AI and machine learning reshaping industries and raising ethical considerations.","The world economy is experiencing notable shifts due to changes in trade policies, emerging markets, and technological innovations, influencing global markets and economic forecasts."],
        url : {
            more:"https://www.youtube.com/@abpanandatv",
            link:["https://www.youtube.com/@abpanandatv","https://www.youtube.com/@abpanandatv","https://www.youtube.com/@abpanandatv","https://www.youtube.com/@abpanandatv","https://www.youtube.com/@abpanandatv"]
        }
    },
    shopping: {
        title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
    },
    electronics: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers'],
        url : {
            more:"https://www.flipkart.com/search?q=electronics%20&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",
            link:["https://www.flipkart.com/search?q=tv+smart+tv&sid=ckf%2Cczl&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&as-pos=1&as-type=RECENT&suggestionId=tv+smart+tv%7CTelevisions&requestId=789bb7b0-409b-475b-ac1b-3badd60f7afd&as-searchtext=tv","https://www.flipkart.com/search?q=camera&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_8_4_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_8_4_na_na_na&as-pos=8&as-type=RECENT&suggestionId=camera&requestId=43bc0e70-cc02-45fb-90fa-8d5bf54c87ca&as-searchtext=came","https://www.flipkart.com/search?q=gaming+console&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_6_9_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_6_9_na_na_na&as-pos=6&as-type=RECENT&suggestionId=gaming+console&requestId=76b6ee66-abf9-4044-8b82-21fc0f450989&as-searchtext=gaming%20co","https://www.flipkart.com/search?q=head+phone&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_4_3_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_4_3_na_na_na&as-pos=4&as-type=RECENT&suggestionId=head+phone&requestId=033f79cc-2237-4426-8532-59d4c759a1ac&as-searchtext=hea","https://www.flipkart.com/search?q=speaker&sid=0pm%2C0o7&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&as-pos=1&as-type=RECENT&suggestionId=speaker%7CSpeakers&requestId=537f291f-0061-462b-85b6-fbd85bfaf571&as-searchtext=spe"]
        }
    },
    beauty: {
        title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.flipkart.com/search?q=beauty+products&sid=g9b%2Cffi&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&as-pos=1&as-type=RECENT&suggestionId=beauty+products%7CMakeup&requestId=23ff253c-e3e2-426a-a170-11566cc5819c&as-searchtext=beauty%20products",
            link:["https://www.flipkart.com/search?q=makeup%20and%20nails&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off","https://www.flipkart.com/search?q=skin%20care&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off","https://www.flipkart.com/search?q=fragrance&sid=g9b%2C0yh&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_na&as-pos=2&as-type=RECENT&suggestionId=fragrance%7CFragrances&requestId=c4daadc6-5446-4f0f-a5dd-9258cd4321d2&as-searchtext=fragre","https://www.flipkart.com/search?q=hair%20care&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"]
        }
    },
    mobiles: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_a372a051-d211-413e-ad09-1d9c7a346961_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J",
            link:["https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_a372a051-d211-413e-ad09-1d9c7a346961_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J","https://www.flipkart.com/search?q=phone%20case%20and%20covers&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off","https://www.flipkart.com/search?q=power+bank&sid=tyy%2C4mr%2Cfu6&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&as-pos=1&as-type=RECENT&suggestionId=power+bank%7CPower+Banks&requestId=9dc6013b-ccaa-488c-a31c-29913ac66c03&as-searchtext=power","https://www.flipkart.com/search?q=tablet+5g&sid=tyy%2Chry&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&as-pos=1&as-type=RECENT&suggestionId=tablet+5g%7CTablets&requestId=652adbb9-cbdc-427b-aee8-39e900891c44&as-searchtext=tablet"]
        }
    },
    men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.flipkart.com/search?q=mens+fashion&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_3_7_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_3_7_na_na_na&as-pos=3&as-type=RECENT&suggestionId=mens+fashion&requestId=a461848c-96ed-4b7f-aaed-431531db2ff9&as-searchtext=mens%20fashion",
            link:["https://www.flipkart.com/search?q=men+clothing&sid=clo%2Cash&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&as-pos=1&as-type=RECENT&suggestionId=men+clothing%7CTopwear&requestId=b6f3d6ac-94d3-4531-a110-23c6bf55a563&as-searchtext=men%20clo","https://www.flipkart.com/search?q=men+shirt&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_2_6_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_2_6_na_na_ps&as-pos=2&as-type=RECENT&suggestionId=men+shirt&requestId=c98f1cdd-6d57-46aa-9e29-ee288692d50a&as-searchtext=men%20sh","https://www.flipkart.com/search?q=t+shirt+for+men&sid=clo%2Cash%2Cank%2Cedy&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=t+shirt+for+men%7CMen%27s+T-shirts&requestId=931dd623-20ce-4d38-956b-1c6678dfeed5&as-searchtext=men%20shirt","https://www.flipkart.com/search?q=mens+inner+wear&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_4_8_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_4_8_na_na_na&as-pos=4&as-type=RECENT&suggestionId=mens+inner+wear&requestId=9caf4a8f-026d-4de8-b62f-431a9a9b14f0&as-searchtext=men%20inne","https://www.flipkart.com/search?q=mens+jeans&sid=clo%2Cvua%2Ck58%2Ci51&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&as-pos=1&as-type=RECENT&suggestionId=mens+jeans%7CMen%27s+Jeans&requestId=ed939564-0400-4b67-a63f-6b0f5c40e643&as-searchtext=mens%20j"]
        }
    },
    women: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.flipkart.com/search?q=women%20fashion&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",
            link:["https://www.flipkart.com/search?q=women+clothing+fashion&sid=clo%2Ccfv&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_17_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_17_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=women+clothing+fashion%7CKurtas%2C+Ethnic+Sets+and+Bottoms&requestId=cc07a310-1d28-428b-8009-e5034ec84a9c&as-searchtext=women%20fashion%20clo","https://www.flipkart.com/search?q=fashion+for+women+western&sid=clo%2Codx&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_17_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_17_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=fashion+for+women+western%7CDresses+and+Gowns&requestId=291b415e-d543-4e26-ad92-7bae38692502&as-searchtext=women%20western%20fas","https://www.flipkart.com/search?q=women+ethenic+wear&sid=clo%2Ccfv%2Citg%2Ctys&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=women+ethenic+wear%7CWomen%27s+Ethnic+Sets&requestId=89c987f1-fe15-4f82-ab57-bda5d3a17718&as-searchtext=women%20ethe","https://www.flipkart.com/search?q=women%20top%20brands&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["song 1","song 2","song 3","song 4","song 5"],
        url : {
            more:"https://www.youtube.com/results?search_query=bollywood+songs",
            link:["https://www.youtube.com/results?search_query=bollywood+songs","https://www.youtube.com/results?search_query=bollywood+songs","https://www.youtube.com/results?search_query=bollywood+songs","https://www.youtube.com/results?search_query=bollywood+songs","https://www.youtube.com/results?search_query=bollywood+songs"]
        }
    },
    hollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/results?search_query=hollywood+movie",
            link:["https://www.youtube.com/results?search_query=comedy+hollywood+movie","https://www.youtube.com/results?search_query=horror+hollywood+movie","https://www.youtube.com/results?search_query=sci+fi+hollywood+movie","https://www.youtube.com/results?search_query=romance+hollywood+movie","https://www.youtube.com/results?search_query=action+hollywood+movie"]
        }
    },
    bollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/results?search_query=bollywood+movie",
            link:["https://www.youtube.com/results?search_query=comedy+bollywood+movie","https://www.youtube.com/results?search_query=horror+bollywood+movie","https://www.youtube.com/results?search_query=sci+fi+bollywood+movie","https://www.youtube.com/results?search_query=romance+bollywood+movie","https://www.youtube.com/results?search_query=action+bollywood+movie"]
        }
    },
    web: {
        title: ["Thanks for your response","Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/results?search_query=web+series",
            link:["https://www.youtube.com/results?search_query=comedy+web+series","https://www.youtube.com/results?search_query=horror+web+series","https://www.youtube.com/results?search_query=sci+fi+web+series","https://www.youtube.com/results?search_query=romance+web+series","https://www.youtube.com/results?search_query=action+web+series"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/","https://www.netflix.com/in/","https://www.primevideo.com/offers/nonprimehomepage/ref=atv_dl_rdr","https://www.hotstar.com/in/home?ref=%2Fin"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}