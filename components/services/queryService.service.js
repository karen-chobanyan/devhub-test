;(function() {

  'use strict';

  angular
    .module('devhub-test')
    .factory('QueryService', [
      '$http', '$q', 'CONSTANTS', QueryService
    ]);


  function QueryService($http, $q, CONSTANTS) {
    let users = [{"id":1,"firstname":"Mufinella","lastname":"Whawell","middlename":"Dafnée","email":"mwhawell0@angelfire.com","avatar":"https://robohash.org/saepetemporeest.bmp?size=50x50&set=set1","phone":"523-845-3024"},
    {"id":2,"firstname":"Daffie","lastname":"Oldrey","middlename":"Åke","email":"doldrey1@tiny.cc","avatar":"https://robohash.org/quivelnecessitatibus.png?size=50x50&set=set1","phone":"502-339-6945"},
    {"id":3,"firstname":"Auberta","lastname":"McCurtain","middlename":"Lucrèce","email":"amccurtain2@techcrunch.com","avatar":"https://robohash.org/itaquesintomnis.bmp?size=50x50&set=set1","phone":"120-761-6762"},
    {"id":4,"firstname":"Ashley","lastname":"Legen","middlename":"Irène","email":"alegen3@tinyurl.com","avatar":"https://robohash.org/nihilrepudiandaeut.png?size=50x50&set=set1","phone":"979-408-7274"},
    {"id":5,"firstname":"Raf","lastname":"Boles","middlename":"Pénélope","email":"rboles4@barnesandnoble.com","avatar":"https://robohash.org/aututvoluptatum.bmp?size=50x50&set=set1","phone":"150-164-5242"},
    {"id":6,"firstname":"Janaye","lastname":"Burdess","middlename":"Maëlann","email":"jburdess5@imdb.com","avatar":"https://robohash.org/molestiaereprehenderitsimilique.bmp?size=50x50&set=set1","phone":"266-664-1833"},
    {"id":7,"firstname":"Laina","lastname":"Thornbarrow","middlename":"Danièle","email":"lthornbarrow6@blogger.com","avatar":"https://robohash.org/sitetodio.png?size=50x50&set=set1","phone":"549-430-9551"},
    {"id":8,"firstname":"Saundra","lastname":"Rowden","middlename":"Vénus","email":"srowden7@chronoengine.com","avatar":"https://robohash.org/asperioresquibusdamquaerat.jpg?size=50x50&set=set1","phone":"525-781-5070"},
    {"id":9,"firstname":"Damiano","lastname":"Flasby","middlename":"Pénélope","email":"dflasby8@cocolog-nifty.com","avatar":"https://robohash.org/undemollitianon.bmp?size=50x50&set=set1","phone":"178-489-8403"},
    {"id":10,"firstname":"Regen","lastname":"Longmore","middlename":"Gösta","email":"rlongmore9@pinterest.com","avatar":"https://robohash.org/perferendistemporibusmolestiae.png?size=50x50&set=set1","phone":"612-629-9390"},
    {"id":11,"firstname":"Salim","lastname":"Suggate","middlename":"Léonie","email":"ssuggatea@bluehost.com","avatar":"https://robohash.org/voluptateomnismaxime.png?size=50x50&set=set1","phone":"612-212-8009"},
    {"id":12,"firstname":"Giustino","lastname":"Gainsborough","middlename":"Vérane","email":"ggainsboroughb@facebook.com","avatar":"https://robohash.org/quiaperferendissuscipit.png?size=50x50&set=set1","phone":"964-405-6808"},
    {"id":13,"firstname":"Dreddy","lastname":"Jost","middlename":"Séverine","email":"djostc@nature.com","avatar":"https://robohash.org/voluptatemlaudantiumest.jpg?size=50x50&set=set1","phone":"327-291-1701"},
    {"id":14,"firstname":"Christal","lastname":"Scarce","middlename":"Aloïs","email":"cscarced@reuters.com","avatar":"https://robohash.org/utconsecteturtotam.jpg?size=50x50&set=set1","phone":"481-610-0647"},
    {"id":15,"firstname":"Hendrick","lastname":"Symson","middlename":"Anaé","email":"hsymsone@biblegateway.com","avatar":"https://robohash.org/suntrerumvoluptatibus.jpg?size=50x50&set=set1","phone":"650-162-8663"},
    {"id":16,"firstname":"Borden","lastname":"Follows","middlename":"Marie-noël","email":"bfollowsf@so-net.ne.jp","avatar":"https://robohash.org/sintrepellatcorrupti.bmp?size=50x50&set=set1","phone":"341-659-6052"},
    {"id":17,"firstname":"Heinrick","lastname":"Chessill","middlename":"Lén","email":"hchessillg@zdnet.com","avatar":"https://robohash.org/inventoreetconsequuntur.png?size=50x50&set=set1","phone":"230-400-9625"},
    {"id":18,"firstname":"Nowell","lastname":"Orring","middlename":"Dafnée","email":"norringh@taobao.com","avatar":"https://robohash.org/quiautdolore.png?size=50x50&set=set1","phone":"894-480-2408"},
    {"id":19,"firstname":"Sibyl","lastname":"Oles","middlename":"Lèi","email":"solesi@prlog.org","avatar":"https://robohash.org/eiusnonaut.bmp?size=50x50&set=set1","phone":"608-962-8165"},
    {"id":20,"firstname":"Gelya","lastname":"Hartburn","middlename":"Edmée","email":"ghartburnj@huffingtonpost.com","avatar":"https://robohash.org/molestiasdelectusexpedita.bmp?size=50x50&set=set1","phone":"347-550-6255"},
    {"id":21,"firstname":"Andrej","lastname":"Jacobsohn","middlename":"Östen","email":"ajacobsohnk@ycombinator.com","avatar":"https://robohash.org/quasdictarerum.png?size=50x50&set=set1","phone":"573-351-8296"},
    {"id":22,"firstname":"Thomasina","lastname":"Braidon","middlename":"Vérane","email":"tbraidonl@google.cn","avatar":"https://robohash.org/autexdistinctio.bmp?size=50x50&set=set1","phone":"966-439-6170"},
    {"id":23,"firstname":"Jacynth","lastname":"Lisciardelli","middlename":"Tú","email":"jlisciardellim@printfriendly.com","avatar":"https://robohash.org/veroculpaassumenda.jpg?size=50x50&set=set1","phone":"357-835-2213"},
    {"id":24,"firstname":"Sol","lastname":"MacHostie","middlename":"Amélie","email":"smachostien@godaddy.com","avatar":"https://robohash.org/idrerumab.png?size=50x50&set=set1","phone":"613-786-1860"},
    {"id":25,"firstname":"Susy","lastname":"Davydoch","middlename":"Marlène","email":"sdavydocho@senate.gov","avatar":"https://robohash.org/ipsamdoloremquereiciendis.png?size=50x50&set=set1","phone":"608-230-7572"},
    {"id":26,"firstname":"Neville","lastname":"Benediktsson","middlename":"Cécilia","email":"nbenediktssonp@usnews.com","avatar":"https://robohash.org/nihilmolestiaset.png?size=50x50&set=set1","phone":"134-337-2850"},
    {"id":27,"firstname":"Rochette","lastname":"Maddin","middlename":"Andréa","email":"rmaddinq@google.nl","avatar":"https://robohash.org/quiaeiusperspiciatis.png?size=50x50&set=set1","phone":"118-808-4936"},
    {"id":28,"firstname":"Derrek","lastname":"Filov","middlename":"Yáo","email":"dfilovr@blinklist.com","avatar":"https://robohash.org/quascumtempore.bmp?size=50x50&set=set1","phone":"701-842-9405"},
    {"id":29,"firstname":"Daloris","lastname":"Oades","middlename":"Publicité","email":"doadess@about.me","avatar":"https://robohash.org/etculpaerror.bmp?size=50x50&set=set1","phone":"758-137-9408"},
    {"id":30,"firstname":"Timi","lastname":"Anan","middlename":"Intéressant","email":"tanant@cnbc.com","avatar":"https://robohash.org/oditinventoreut.jpg?size=50x50&set=set1","phone":"883-204-0531"},
    {"id":31,"firstname":"Evelina","lastname":"Duling","middlename":"Sélène","email":"edulingu@g.co","avatar":"https://robohash.org/essesolutaquo.bmp?size=50x50&set=set1","phone":"275-918-5554"},
    {"id":32,"firstname":"Jakie","lastname":"Mockler","middlename":"Maëlle","email":"jmocklerv@cafepress.com","avatar":"https://robohash.org/ipsamculpaquae.png?size=50x50&set=set1","phone":"425-256-4008"},
    {"id":33,"firstname":"Fanni","lastname":"Moxham","middlename":"Méthode","email":"fmoxhamw@shutterfly.com","avatar":"https://robohash.org/distinctioquodqui.bmp?size=50x50&set=set1","phone":"494-348-2805"},
    {"id":34,"firstname":"Dianemarie","lastname":"Dumbarton","middlename":"Maëline","email":"ddumbartonx@gov.uk","avatar":"https://robohash.org/officiisminusodio.png?size=50x50&set=set1","phone":"131-913-4209"},
    {"id":35,"firstname":"Valentin","lastname":"Corson","middlename":"Lén","email":"vcorsony@wix.com","avatar":"https://robohash.org/quinumquamsoluta.bmp?size=50x50&set=set1","phone":"719-889-0858"},
    {"id":36,"firstname":"Griffin","lastname":"Feavearyear","middlename":"Pò","email":"gfeavearyearz@tinyurl.com","avatar":"https://robohash.org/doloremnonadipisci.png?size=50x50&set=set1","phone":"223-138-4309"},
    {"id":37,"firstname":"Casey","lastname":"Ingle","middlename":"Alizée","email":"cingle10@illinois.edu","avatar":"https://robohash.org/estsuscipitlaborum.jpg?size=50x50&set=set1","phone":"355-436-6253"},
    {"id":38,"firstname":"Nikita","lastname":"Halliwell","middlename":"Bérangère","email":"nhalliwell11@wordpress.com","avatar":"https://robohash.org/cumquedoloreeaque.jpg?size=50x50&set=set1","phone":"640-835-9620"},
    {"id":39,"firstname":"Sarette","lastname":"Berrisford","middlename":"Maïlys","email":"sberrisford12@amazon.co.uk","avatar":"https://robohash.org/cumquequisiusto.jpg?size=50x50&set=set1","phone":"395-141-7462"},
    {"id":40,"firstname":"Wenona","lastname":"Spilsted","middlename":"Néhémie","email":"wspilsted13@hhs.gov","avatar":"https://robohash.org/doloremvoluptasaut.png?size=50x50&set=set1","phone":"546-583-7633"},
    {"id":41,"firstname":"Sianna","lastname":"Cains","middlename":"Eléa","email":"scains14@craigslist.org","avatar":"https://robohash.org/consequunturinciduntanimi.jpg?size=50x50&set=set1","phone":"523-310-1275"},
    {"id":42,"firstname":"Giovanna","lastname":"Bulfoy","middlename":"Mélinda","email":"gbulfoy15@shinystat.com","avatar":"https://robohash.org/autemquidemvoluptas.jpg?size=50x50&set=set1","phone":"998-294-8754"},
    {"id":43,"firstname":"Skipton","lastname":"Grealish","middlename":"Réjane","email":"sgrealish16@mlb.com","avatar":"https://robohash.org/reprehenderitnullaoptio.png?size=50x50&set=set1","phone":"679-801-1431"},
    {"id":44,"firstname":"Terra","lastname":"Cabral","middlename":"Marie-thérèse","email":"tcabral17@360.cn","avatar":"https://robohash.org/estdelectusautem.jpg?size=50x50&set=set1","phone":"596-415-2937"},
    {"id":45,"firstname":"Gibb","lastname":"Zecchetti","middlename":"Méng","email":"gzecchetti18@java.com","avatar":"https://robohash.org/iureetaut.jpg?size=50x50&set=set1","phone":"493-331-6376"},
    {"id":46,"firstname":"Waverley","lastname":"Robison","middlename":"Eugénie","email":"wrobison19@blogger.com","avatar":"https://robohash.org/sitfaceresint.bmp?size=50x50&set=set1","phone":"567-843-0395"},
    {"id":47,"firstname":"Myriam","lastname":"Scallon","middlename":"Réservés","email":"mscallon1a@nytimes.com","avatar":"https://robohash.org/impeditnoneum.png?size=50x50&set=set1","phone":"321-754-2005"},
    {"id":48,"firstname":"Edlin","lastname":"Bronot","middlename":"Inès","email":"ebronot1b@blogger.com","avatar":"https://robohash.org/suntinlabore.bmp?size=50x50&set=set1","phone":"644-551-2825"},
    {"id":49,"firstname":"Stirling","lastname":"Armour","middlename":"Estève","email":"sarmour1c@dell.com","avatar":"https://robohash.org/asperioresmolestiaeautem.png?size=50x50&set=set1","phone":"388-548-8532"},
    {"id":50,"firstname":"Gabrielle","lastname":"Klaiser","middlename":"Mélodie","email":"gklaiser1d@mysql.com","avatar":"https://robohash.org/repellatnonqui.jpg?size=50x50&set=set1","phone":"746-812-7752"},
    {"id":51,"firstname":"Gina","lastname":"Artus","middlename":"Nuó","email":"gartus1e@globo.com","avatar":"https://robohash.org/repellendusconsecteturquibusdam.png?size=50x50&set=set1","phone":"117-608-8034"},
    {"id":52,"firstname":"Guthrie","lastname":"A'field","middlename":"Salomé","email":"gafield1f@yellowbook.com","avatar":"https://robohash.org/nullaculpaquod.bmp?size=50x50&set=set1","phone":"884-218-1837"},
    {"id":53,"firstname":"Vanya","lastname":"Sailer","middlename":"Illustrée","email":"vsailer1g@imgur.com","avatar":"https://robohash.org/commodifacilistempore.jpg?size=50x50&set=set1","phone":"234-730-4547"},
    {"id":54,"firstname":"Leighton","lastname":"Bonnefin","middlename":"Noëlla","email":"lbonnefin1h@nytimes.com","avatar":"https://robohash.org/cumquoenim.jpg?size=50x50&set=set1","phone":"898-350-3596"},
    {"id":55,"firstname":"Marianna","lastname":"Follin","middlename":"Mén","email":"mfollin1i@sun.com","avatar":"https://robohash.org/ipsaetfacere.bmp?size=50x50&set=set1","phone":"592-536-4905"},
    {"id":56,"firstname":"Donnajean","lastname":"Wyant","middlename":"Noémie","email":"dwyant1j@harvard.edu","avatar":"https://robohash.org/eosaliquidut.bmp?size=50x50&set=set1","phone":"738-998-3742"},
    {"id":57,"firstname":"Lynnet","lastname":"Aitken","middlename":"Béatrice","email":"laitken1k@vistaprint.com","avatar":"https://robohash.org/quaeratmolestiasut.jpg?size=50x50&set=set1","phone":"983-152-4155"},
    {"id":58,"firstname":"Deloria","lastname":"Kirstein","middlename":"Kallisté","email":"dkirstein1l@cdc.gov","avatar":"https://robohash.org/harumdoloremquesaepe.jpg?size=50x50&set=set1","phone":"714-356-5978"},
    {"id":59,"firstname":"Alfonse","lastname":"Kelcey","middlename":"Aurélie","email":"akelcey1m@fastcompany.com","avatar":"https://robohash.org/ipsaexplicaboculpa.bmp?size=50x50&set=set1","phone":"477-522-3114"},
    {"id":60,"firstname":"Reynolds","lastname":"Hail","middlename":"Valérie","email":"rhail1n@flickr.com","avatar":"https://robohash.org/delectusaliquamsint.jpg?size=50x50&set=set1","phone":"335-751-5721"},
    {"id":61,"firstname":"Sandra","lastname":"Wybron","middlename":"Joséphine","email":"swybron1o@buzzfeed.com","avatar":"https://robohash.org/ipsumundepossimus.jpg?size=50x50&set=set1","phone":"479-737-3370"},
    {"id":62,"firstname":"Remus","lastname":"Garrioch","middlename":"Erwéi","email":"rgarrioch1p@thetimes.co.uk","avatar":"https://robohash.org/officiasitnam.bmp?size=50x50&set=set1","phone":"999-849-1362"},
    {"id":63,"firstname":"Cleopatra","lastname":"Lippitt","middlename":"Adèle","email":"clippitt1q@constantcontact.com","avatar":"https://robohash.org/optiopariaturmollitia.jpg?size=50x50&set=set1","phone":"314-177-0153"},
    {"id":64,"firstname":"Hurlee","lastname":"Harms","middlename":"Cunégonde","email":"hharms1r@noaa.gov","avatar":"https://robohash.org/excepturidebitisvoluptatum.bmp?size=50x50&set=set1","phone":"862-839-9682"},
    {"id":65,"firstname":"Rhona","lastname":"Blazevic","middlename":"Björn","email":"rblazevic1s@deviantart.com","avatar":"https://robohash.org/ipsamquirerum.jpg?size=50x50&set=set1","phone":"475-765-5661"},
    {"id":66,"firstname":"Cirstoforo","lastname":"Haith","middlename":"Yénora","email":"chaith1t@ibm.com","avatar":"https://robohash.org/eligendiconsecteturadipisci.jpg?size=50x50&set=set1","phone":"802-844-5135"},
    {"id":67,"firstname":"Tedi","lastname":"Bart","middlename":"Marie-josée","email":"tbart1u@ifeng.com","avatar":"https://robohash.org/culpavoluptatemdolor.png?size=50x50&set=set1","phone":"867-930-9390"},
    {"id":68,"firstname":"Emmalynne","lastname":"Varne","middlename":"Andréanne","email":"evarne1v@unblog.fr","avatar":"https://robohash.org/dolorlaboriosamreprehenderit.png?size=50x50&set=set1","phone":"378-572-6369"},
    {"id":69,"firstname":"Herby","lastname":"Killingback","middlename":"Séréna","email":"hkillingback1w@toplist.cz","avatar":"https://robohash.org/consequaturestconsequatur.bmp?size=50x50&set=set1","phone":"731-835-8614"},
    {"id":70,"firstname":"Rolando","lastname":"Pincott","middlename":"Joséphine","email":"rpincott1x@istockphoto.com","avatar":"https://robohash.org/laborumdelenitiipsam.png?size=50x50&set=set1","phone":"182-994-7431"},
    {"id":71,"firstname":"Perry","lastname":"Haylett","middlename":"Marie-noël","email":"phaylett1y@apple.com","avatar":"https://robohash.org/quositveritatis.bmp?size=50x50&set=set1","phone":"228-624-5650"},
    {"id":72,"firstname":"Kelwin","lastname":"Malter","middlename":"Mahélie","email":"kmalter1z@google.com.hk","avatar":"https://robohash.org/quidolorenim.jpg?size=50x50&set=set1","phone":"775-237-6092"},
    {"id":73,"firstname":"Antonius","lastname":"Quickfall","middlename":"Néhémie","email":"aquickfall20@elegantthemes.com","avatar":"https://robohash.org/sedmagnambeatae.jpg?size=50x50&set=set1","phone":"827-935-5528"},
    {"id":74,"firstname":"Otis","lastname":"Anster","middlename":"Åke","email":"oanster21@merriam-webster.com","avatar":"https://robohash.org/incumquequasi.png?size=50x50&set=set1","phone":"780-272-3597"},
    {"id":75,"firstname":"Allison","lastname":"Doorbar","middlename":"Hélène","email":"adoorbar22@ning.com","avatar":"https://robohash.org/dolorlaboriosamnon.bmp?size=50x50&set=set1","phone":"285-595-4868"},
    {"id":76,"firstname":"Munmro","lastname":"Pogosian","middlename":"Miléna","email":"mpogosian23@bizjournals.com","avatar":"https://robohash.org/nostrumquiaiure.png?size=50x50&set=set1","phone":"602-233-0589"},
    {"id":77,"firstname":"Rozele","lastname":"Aleksidze","middlename":"Léone","email":"raleksidze24@vk.com","avatar":"https://robohash.org/doloremqueomnisaut.bmp?size=50x50&set=set1","phone":"918-713-8753"},
    {"id":78,"firstname":"Desdemona","lastname":"Checcucci","middlename":"Clémentine","email":"dcheccucci25@adobe.com","avatar":"https://robohash.org/sedcupiditatedolore.jpg?size=50x50&set=set1","phone":"336-416-4280"},
    {"id":79,"firstname":"Louisette","lastname":"Beckwith","middlename":"Geneviève","email":"lbeckwith26@sohu.com","avatar":"https://robohash.org/molestiaeporroest.jpg?size=50x50&set=set1","phone":"872-504-7683"},
    {"id":80,"firstname":"Dolorita","lastname":"Plackstone","middlename":"Léonore","email":"dplackstone27@addthis.com","avatar":"https://robohash.org/asperioresteneturest.png?size=50x50&set=set1","phone":"533-570-0057"},
    {"id":81,"firstname":"Catherine","lastname":"Polack","middlename":"Célia","email":"cpolack28@state.gov","avatar":"https://robohash.org/quodoloreset.bmp?size=50x50&set=set1","phone":"823-878-7161"},
    {"id":82,"firstname":"Valentine","lastname":"Mattke","middlename":"Stéphanie","email":"vmattke29@chicagotribune.com","avatar":"https://robohash.org/nihilquoaliquid.png?size=50x50&set=set1","phone":"229-735-0873"},
    {"id":83,"firstname":"Hunfredo","lastname":"Simchenko","middlename":"Hélèna","email":"hsimchenko2a@google.de","avatar":"https://robohash.org/veniamdignissimosaut.bmp?size=50x50&set=set1","phone":"546-651-3152"},
    {"id":84,"firstname":"Stephen","lastname":"Luety","middlename":"Maéna","email":"sluety2b@gov.uk","avatar":"https://robohash.org/aututeveniet.jpg?size=50x50&set=set1","phone":"743-849-1997"},
    {"id":85,"firstname":"Merwyn","lastname":"Leser","middlename":"Joséphine","email":"mleser2c@elpais.com","avatar":"https://robohash.org/etpariaturnatus.png?size=50x50&set=set1","phone":"671-567-7627"},
    {"id":86,"firstname":"Ottilie","lastname":"Henner","middlename":"Vénus","email":"ohenner2d@sphinn.com","avatar":"https://robohash.org/delectusquaesaepe.bmp?size=50x50&set=set1","phone":"633-886-6712"},
    {"id":87,"firstname":"Jonie","lastname":"Herity","middlename":"Estève","email":"jherity2e@smugmug.com","avatar":"https://robohash.org/inventoreinciduntut.bmp?size=50x50&set=set1","phone":"219-316-7155"},
    {"id":88,"firstname":"Rheba","lastname":"Eastop","middlename":"Naéva","email":"reastop2f@msn.com","avatar":"https://robohash.org/quamutamet.jpg?size=50x50&set=set1","phone":"444-378-2437"},
    {"id":89,"firstname":"Monte","lastname":"Rowatt","middlename":"Mégane","email":"mrowatt2g@boston.com","avatar":"https://robohash.org/molestiaeetodio.png?size=50x50&set=set1","phone":"153-811-7740"},
    {"id":90,"firstname":"Jasmina","lastname":"Eglise","middlename":"Göran","email":"jeglise2h@bloglovin.com","avatar":"https://robohash.org/consequaturnihildignissimos.png?size=50x50&set=set1","phone":"140-880-1932"},
    {"id":91,"firstname":"Shelly","lastname":"Jankin","middlename":"Adélie","email":"sjankin2i@elpais.com","avatar":"https://robohash.org/etautemlaudantium.png?size=50x50&set=set1","phone":"230-608-8846"},
    {"id":92,"firstname":"Gram","lastname":"Vigors","middlename":"Nélie","email":"gvigors2j@yelp.com","avatar":"https://robohash.org/etaperiamqui.bmp?size=50x50&set=set1","phone":"689-180-7818"},
    {"id":93,"firstname":"Cindra","lastname":"Vokins","middlename":"Faîtes","email":"cvokins2k@abc.net.au","avatar":"https://robohash.org/sitcommodiut.bmp?size=50x50&set=set1","phone":"420-955-1482"},
    {"id":94,"firstname":"Chandal","lastname":"Smye","middlename":"Hélène","email":"csmye2l@auda.org.au","avatar":"https://robohash.org/nequesedtemporibus.jpg?size=50x50&set=set1","phone":"799-361-2392"},
    {"id":95,"firstname":"Eldon","lastname":"De Bell","middlename":"Marlène","email":"edebell2m@amazonaws.com","avatar":"https://robohash.org/utrationeet.bmp?size=50x50&set=set1","phone":"806-983-1151"},
    {"id":96,"firstname":"Brinn","lastname":"Mollon","middlename":"Léonore","email":"bmollon2n@addthis.com","avatar":"https://robohash.org/etvoluptasdebitis.jpg?size=50x50&set=set1","phone":"594-367-1784"},
    {"id":97,"firstname":"Shirl","lastname":"Jacobson","middlename":"Mégane","email":"sjacobson2o@vk.com","avatar":"https://robohash.org/officiisquasipsum.bmp?size=50x50&set=set1","phone":"902-679-6086"},
    {"id":98,"firstname":"Peter","lastname":"Paddock","middlename":"Clémence","email":"ppaddock2p@miitbeian.gov.cn","avatar":"https://robohash.org/veroistesit.jpg?size=50x50&set=set1","phone":"755-573-9454"},
    {"id":99,"firstname":"Christie","lastname":"Coytes","middlename":"Andrée","email":"ccoytes2q@fema.gov","avatar":"https://robohash.org/istenobisblanditiis.png?size=50x50&set=set1","phone":"414-655-0647"},
    {"id":100,"firstname":"Janie","lastname":"Reaney","middlename":"Géraldine","email":"jreaney2r@rambler.ru","avatar":"https://robohash.org/laboreprovidentiste.png?size=50x50&set=set1","phone":"908-678-3850"}];

    var service = {
      query: query,
      deleteUser: deleteUser,
      createUser: createUser,
      getUser: getUser
    };
    
    console.log('QueryService');
    
    return service;

    function query(method, url, params, data) {

      var deferred = $q.defer();
      console.log(params.page(), params.count(), params.sorting(), params);

      deferred.resolve({results: users
      .sort(compare)
      .slice((params.page() - 1)*params.count(), params.page() * params.count()),
      inlineCount: users.length
    }, );
      
      return deferred.promise;
    }

    function deleteUser(id) {
      var deferred = $q.defer();
      users = users.filter(u => u.id !== id);
      deferred.resolve(id);
      return deferred.promise;
    }

    function createUser(user) {
      user.id = users.length;
      var deferred = $q.defer();
      users.push(user);
      deferred.resolve(true);
      return deferred.promise;
    }

    function getUser(id) {
      console.log(id);
      var deferred = $q.defer();
      var user = users.filter(u => u.id == id);
      console.log(user);
      deferred.resolve( user );
      return deferred.promise;
    }
  }

})();

function compare(a,b) {
  if (a.lastname.toLowerCase() < b.lastname.toLowerCase())
    return -1;
  if (a.lastname.toLowerCase() > b.lastname.toLowerCase())
    return 1;
  return 0;
}