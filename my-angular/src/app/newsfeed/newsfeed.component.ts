import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  public newsArr: any = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "El Chapo: Five things to know",
      "description": "The Mexican drug lord has been found guilty on all 10 counts at his drug trafficking trial in New York.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-47218005",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E86E/production/_105620595_mediaitem105620594.jpg",
      "publishedAt": "2019-02-12T19:03:45Z",
      "content": null
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Can the Democrats' Green New Deal really work?",
      "description": "A radical plan to tackle climate change pushed by Alexandria Ocasio-Cortez has drawn scorn from Trump.",
      "url": "http://www.bbc.co.uk/news/science-environment-47198581",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/146EB/production/_105619638_gettyimages-1094968522.jpg",
      "publishedAt": "2019-02-12T19:01:47Z",
      "content": "Image copyrightGetty ImagesImage caption\r\n Congresswoman Alexandria Ocasio-Cortez and Senator Ed Markey launching the Green New Deal\r\nDespite being labelled as a \"socialist manifesto\", the Green New Deal (GND) on climate change and jobs has sparked a lively d… [+5897 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Canada minister quits in interference claim",
      "description": "Aides are alleged to have pushed the then justice minister for leniency for a firm facing charges.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-47203712",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C530/production/_105608405_hi052162799.jpg",
      "publishedAt": "2019-02-12T18:12:53Z",
      "content": "Image copyrightReutersImage caption\r\n Newly appointed Veterans' Affairs Minister Jody Wilson-Raybould poses with Prime Minister Justin Trudeau\r\nA Canadian minister has resigned amid allegations she was pushed by government officials to ask for leniency for a … [+3647 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Trump: Second government shutdown unlikely",
      "description": "Mr Trump says he is \"not happy\" about the border security deal but does not expect a second shutdown.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-47218630",
      "urlToImage": "https://ichef.bbci.co.uk/images/ic/1024x576/p070m8yx.jpg",
      "publishedAt": "2019-02-12T18:01:50Z",
      "content": "Media captionPresident Trump told supporters in El Paso, \"we're building the wall anyway\"\r\nUS President Donald Trump has said that a second government shutdown is unlikely after lawmakers agreed to a deal to fund the federal government. \r\n\"I don't think you'r… [+3442 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Drug lord 'El Chapo' found guilty in US",
      "description": "Mexican drug kingpin Joaquín Guzmán is convicted at his drug trafficking trial.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-47218887",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/145C5/production/_87579338_87579337.jpg",
      "publishedAt": "2019-02-12T17:42:54Z",
      "content": "Image copyrightReutersImage caption\r\n Guzmán was extradited to the US in 2017\r\nMexican drug kingpin Joaquín \"El Chapo\" Guzmán has been found guilty on all 10 counts at his drug trafficking trial at a federal court in New York.\r\nGuzmán, 61, was arrested in Jan… [+5058 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Person enters house, smokes weed, sees tiger",
      "description": "When they called the police to report the tiger, officers thought the caller was hallucinating.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-47210466",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6D93/production/_105615082_gettyimages-1086747844.jpg",
      "publishedAt": "2019-02-12T16:35:44Z",
      "content": "Image copyrightGetty ImagesImage caption\r\n Police say the tiger, not pictured, was found in a 'rinky-dink' cage\r\nA person who went into an abandoned house so they could smoke cannabis found a neglected tiger inside.\r\nPolice in Houston, Texas, said that when t… [+1312 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Ex-astronaut launches Senate bid in Arizona",
      "description": "Mark Kelly, husband of former congresswoman Gabby Giffords, says his campaign is his \"next mission\".",
      "url": "http://www.bbc.co.uk/news/world-us-canada-47215775",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B785/production/_105618964_gettyimages-588670954.jpg",
      "publishedAt": "2019-02-12T16:00:42Z",
      "content": "Image copyrightJoe Raedle\r\nFormer US astronaut Mark Kelly has launched a 2020 Democratic campaign for the late Senator John McCain's Arizona seat in Congress.\r\nMr Kelly, 54, is married to former Arizona congresswoman Gabrielle Giffords, who retired after bein… [+2851 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Maduro condemns 'extremist' Trump",
      "description": "Venezuela's embattled president tells the BBC the offer of aid is an intervention plan by the US.",
      "url": "http://www.bbc.co.uk/news/world-latin-america-47209526",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8247/production/_105615333_mediaitem105611437.jpg",
      "publishedAt": "2019-02-12T12:00:27Z",
      "content": "Image copyrightAFPImage caption\r\n President Maduro has resisted pressure to call early presidential elections\r\nVenezuela's embattled President Nicolás Maduro has called Donald Trump's government a \"gang of extremists\" and blamed the US for his country's crisi… [+3714 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Trump supporter attacks BBC cameraman",
      "description": "\"I didn't know what was going on,\" said the cameraman who was covering a Trump rally in Texas.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-47208909",
      "urlToImage": "https://ichef.bbci.co.uk/images/ic/1024x576/p070mgvr.jpg",
      "publishedAt": "2019-02-12T08:11:52Z",
      "content": "Media captionA Trump supporter shoved a BBC cameraman at the rally\r\nA supporter of US President Donald Trump has attacked a BBC cameraman at a campaign rally in El Paso, Texas.\r\nSporting a Make America Great Again cap, the man shoved and swore at the BBC's Ro… [+2502 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Environment in multiple crises - report",
      "description": "Policymakers are not grasping the seriousness of what we’re doing to the planet, a think-tank warns.",
      "url": "http://www.bbc.co.uk/news/science-environment-47203344",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B4BE/production/_105607264_rubbish.jpg",
      "publishedAt": "2019-02-12T01:43:12Z",
      "content": "Image copyrightGetty ImagesImage caption\r\n The \"human footprint\" is creating multiple challenges\r\nPoliticians and policymakers have failed to grasp the gravity of the environmental crisis facing the Earth, a report claims.\r\nThe think-tank IPPR says human impa… [+3565 chars]"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
