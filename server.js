// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express, { response } from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


// const tempDummyNews = {
//   data: [
//     {
//       id: 1,
//       slug: "bloeien-in-2026",
//       title: "Laatste kans om de nabloei te zien van de duizendblad",
//       body: "De bloei van duizendblad is bijna voorbij, maar de plant is nog goed te zien. De bloemen zijn aan het opdrogen en blijven nog even zichtbaar. Dit is een laatste moment om te zien hoe duizendblad eruitziet na de bloei, voordat de bloemen niet meer zichtbaar zijn. Wat wel mooi zichtbaar blijft zijn de mooie bladeren.",
//       date: "2025-11-20",
//       image: "ccc47447-c2db-441b-a18b-183ab5a0b280"
//     },
//     {
//       id: 2,
//       slug: "zadenknoppen-teunisbloem",
//       title: "De zadenknoppen van de teunisbloem zijn nu goed te zien",
//       body: "De bloei van duizendblad is bijna voorbij, maar de plant is nog goed te zien. De bloemen zijn aan het opdrogen en blijven nog even zichtbaar. Dit is een laatste moment om te zien hoe duizendblad eruitziet na de bloei, voordat de bloemen niet meer zichtbaar zijn. Wat wel mooi zichtbaar blijft zijn de mooie bladeren.",
//       date: "2025-11-20",
//       image: "ccc47447-c2db-441b-a18b-183ab5a0b280"
//     },
//     {
//       id: 3,
//       slug: "teunisbloem-zaden-3",
//       title: "De zadenknoppen van de teunisbloem zijn nu goed te zien 3",
//       body: "De bloei van duizendblad is bijna voorbij, maar de plant is nog goed te zien. De bloemen zijn aan het opdrogen en blijven nog even zichtbaar. Dit is een laatste moment om te zien hoe duizendblad eruitziet na de bloei, voordat de bloemen niet meer zichtbaar zijn. Wat wel mooi zichtbaar blijft zijn de mooie bladeren.",
//       date: "2025-11-20",
//       image: "ccc47447-c2db-441b-a18b-183ab5a0b280"
//     },
//     {
//       id: 4,
//       slug: "teunisbloem-zaden-4",
//       title: "De zadenknoppen van de teunisbloem zijn nu goed te zien 4",
//       body: "De bloei van duizendblad is bijna voorbij, maar de plant is nog goed te zien. De bloemen zijn aan het opdrogen en blijven nog even zichtbaar. Dit is een laatste moment om te zien hoe duizendblad eruitziet na de bloei, voordat de bloemen niet meer zichtbaar zijn. Wat wel mooi zichtbaar blijft zijn de mooie bladeren.",
//       date: "2025-11-20",
//       image: "ccc47447-c2db-441b-a18b-183ab5a0b280"
//     },
//     {
//       id: 4,
//       slug: "teunisbloem-zaden-5",
//       title: "De zadenknoppen van de teunisbloem zijn nu goed te zien 5",
//       body: "De bloei van duizendblad is bijna voorbij, maar de plant is nog goed te zien. De bloemen zijn aan het opdrogen en blijven nog even zichtbaar. Dit is een laatste moment om te zien hoe duizendblad eruitziet na de bloei, voordat de bloemen niet meer zichtbaar zijn. Wat wel mooi zichtbaar blijft zijn de mooie bladeren.",
//       date: "2025-11-20",
//       image: "ccc47447-c2db-441b-a18b-183ab5a0b280"
//     },
//     {
//       id: 6,
//       slug: "teunisbloem-zaden-6",
//       title: "De zadenknoppen van de teunisbloem zijn nu goed te zien 6",
//       body: "De bloei van duizendblad is bijna voorbij, maar de plant is nog goed te zien. De bloemen zijn aan het opdrogen en blijven nog even zichtbaar. Dit is een laatste moment om te zien hoe duizendblad eruitziet na de bloei, voordat de bloemen niet meer zichtbaar zijn. Wat wel mooi zichtbaar blijft zijn de mooie bladeren.",
//       date: "2025-11-20",
//       image: "ccc47447-c2db-441b-a18b-183ab5a0b280"
//     },
//     {
//       id: 7,
//       slug: "teunisbloem-zaden-7",
//       title: "De zadenknoppen van de teunisbloem zijn nu goed te zien 7",
//       body: "De bloei van duizendblad is bijna voorbij, maar de plant is nog goed te zien. De bloemen zijn aan het opdrogen en blijven nog even zichtbaar. Dit is een laatste moment om te zien hoe duizendblad eruitziet na de bloei, voordat de bloemen niet meer zichtbaar zijn. Wat wel mooi zichtbaar blijft zijn de mooie bladeren.",
//       date: "2025-11-20",
//       image: "ccc47447-c2db-441b-a18b-183ab5a0b280"
//     },
//     {
//       id: 8,
//       slug: "teunisbloem-zaden-8",
//       title: "De zadenknoppen van de teunisbloem zijn nu goed te zien 8",
//       body: "De bloei van duizendblad is bijna voorbij, maar de plant is nog goed te zien. De bloemen zijn aan het opdrogen en blijven nog even zichtbaar. Dit is een laatste moment om te zien hoe duizendblad eruitziet na de bloei, voordat de bloemen niet meer zichtbaar zijn. Wat wel mooi zichtbaar blijft zijn de mooie bladeren.",
//       date: "2025-11-20",
//       image: "ccc47447-c2db-441b-a18b-183ab5a0b280"
//     },
//     {
//       id: 9,
//       slug: "teunisbloem-zaden-9",
//       title: "De zadenknoppen van de teunisbloem zijn nu goed te zien 9",
//       body: "De bloei van duizendblad is bijna voorbij, maar de plant is nog goed te zien. De bloemen zijn aan het opdrogen en blijven nog even zichtbaar. Dit is een laatste moment om te zien hoe duizendblad eruitziet na de bloei, voordat de bloemen niet meer zichtbaar zijn. Wat wel mooi zichtbaar blijft zijn de mooie bladeren.",
//       date: "2025-11-20",
//       image: "ccc47447-c2db-441b-a18b-183ab5a0b280"
//     }
//   ]
// }


// console.log('Hieronder moet je waarschijnlijk nog wat veranderen')
// Doe een fetch naar de data die je nodig hebt
// const newsResponse = await fetch('...') //url in plakken

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
// const apiResponseJSON = await apiResponse.json() 

// Controleer eventueel de data in je console
// (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(apiResponseJSON)

// Maak een nieuwe Express applicatie aan, waarin we de server configureren

const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

app.get('/', async function (request, response) {
   // Render index.liquid uit de Views map
   // Geef hier eventueel data aan mee
   response.render('index.liquid', {
    huidigPad: request.path
   })
})
// Maak een GET route voor de index (meestal doe je dit in de root, als /)
// !!!! route naar NIEUWS PAGINA !!!!  
// Route 1: in-bloom filter
app.get('/nieuws/in-de-bloei', async function (request, response) {
  const params = {
    'fields': 'id,name,latin,slug,omscription,in_bloom,not_in_bloom,zones',
    'filter[in_bloom][_nnull]': 'true'
  }

// Ook de frankendael_news toevoegen want dat krijg je te zien als list. Plants is alleen voor de volgorde hiervan
  const plantResponse = await fetch('https://fdnd-agency.directus.app/items/frankendael_plants?' + new URLSearchParams(params))
  const plantResponseJSON = await plantResponse.json()

  response.render('nieuws.liquid', {
    // nieuws: tempDummyNews.data,
    planten: plantResponseJSON.data
  })
})

// Route 2: not-in-bloom filter
app.get('/nieuws/na-de-bloei', async function (request, response) {
  const params = {
    'fields': 'id,name,latin,slug,omscription,in_bloom,not_in_bloom,zones',
    'filter[not_in_bloom][_nnull]': 'true'
  }
// Ook de frankendael_news toevoegen want dat krijg je te zien als list. Plants is alleen voor de volgorde hiervan
  const plantResponse = await fetch('https://fdnd-agency.directus.app/items/frankendael_plants?' + new URLSearchParams(params))
  const plantResponseJSON = await plantResponse.json()

  response.render('nieuws.liquid', {
    // nieuws: tempDummyNews.data,
    planten: plantResponseJSON.data
  })
})

// Route 3: alles (geen filter)
app.get('/nieuws', async function (request, response) {
  const params = {
    'fields': 'id,body,title,date,image'
  }

  const newsResponse = await fetch('https://fdnd-agency.directus.app/items/frankendael_news?')
  const newsResponseJSON = await newsResponse.json()

  response.render('nieuws.liquid', {
    // nieuws: tempDummyNews.data,
    nieuws: newsResponseJSON.data,
    huidigPad: request.path
  })
})

// Route 4: detail pagina
app.get('/nieuws/:slug', async function (request, response) {
  const newsResponse = await fetch('https://fdnd-agency.directus.app/items/frankendael_news?')
  const newsResponseJSON = await newsResponse.json()

  const nieuwSlug = request.params.slug
  const artikel = newsResponseJSON.data.find(item => item.slug === nieuwSlug)

  
  response.render('nieuwsDetail.liquid', 
    { artikel: artikel })
})
 
 
// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


// app.get('/404', async function (request, response) {

  
//   response.render('404.liquid', 
//     { artikel: artikel })
// })

app.use((req, res, next) => {
  res.status(404).render('404.liquid')
})
