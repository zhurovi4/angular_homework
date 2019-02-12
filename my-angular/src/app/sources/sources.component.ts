import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  public SourcesList: any = [  
    {  
       "id":"abc-news",
       "name":"ABC News"
    },
    {  
       "id":"abc-news-au",
       "name":"ABC News (AU)"
    },
    {  
       "id":"aftenposten",
       "name":"Aftenposten"
    },
    {  
       "id":"al-jazeera-english",
       "name":"Al Jazeera English"
    },
    {  
       "id":"ansa",
       "name":"ANSA.it"
    },
    {  
       "id":"argaam",
       "name":"Argaam"
    },
    {  
       "id":"ars-technica",
       "name":"Ars Technica"         
    },
    {  
       "id":"ary-news",
       "name":"Ary News"
    },
    {  
       "id":"associated-press",
       "name":"Associated Press"
    },
    {  
       "id":"australian-financial-review",
       "name":"Australian Financial Review"
    },
    {  
       "id":"axios",
       "name":"Axios"
    },
    {  
       "id":"bbc-news",
       "name":"BBC News"
    },
    {  
       "id":"bbc-sport",
       "name":"BBC Sport"
    },
    {  
       "id":"bild",
       "name":"Bild"
    },
    {  
       "id":"blasting-news-br",
       "name":"Blasting News (BR)"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
