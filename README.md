# Server-Side Website

Ontwerp en ontwikkel een server-side website voor een opdrachtgever

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/server-side-rendering-server-side-website/blob/main/docs/INSTRUCTIONS.md)

# Een webapp voor Bloemenveld Frankendael 

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)


## Beschrijving
### Responsive
De website is een webapp en wordt voornamelijk gebruikt op mobiel. Zo is er mobile-first gewerkt. In het ontwerp zijn geen verschillende schermgroottes meegegeven. Mede hierdoor was het niet duidelijk of er uberhaupt de intentie is om het voor andere devices te maken. Dit heb ik uitgevraagd bij de eerste sprint review met de opdrachtgever en ontwerper. Hier is naar voren gekomen, dat het nog wel handig is als de hele website goed wordt gemaakt voor tablet formaat. Op desktop formaat hoeft de gebruiker eigenlijk alleen een overzicht te krijgen van het nieuws en de items die ze hebben verzameld in het Bloemenveld. Dit ga ik in volgende sprint dus verwerken.

### Toegankeijkheid
Html validator en wcag

### Huisstijl
<img width="278" height="599" alt="Image" src="https://github.com/user-attachments/assets/703566e5-e395-479a-927d-89fea21aa671" />
<img width="278" height="599" alt="Image" src="https://github.com/user-attachments/assets/d5e6cde9-6452-4ad5-9505-8edc08fa427a" />

Ik heb eigenlijk alles precies nagemaakt als het design. De kleuren, border-radius, states (groene kleuren), etc.

### Interactief
https://github.com/user-attachments/assets/501fd783-172c-4530-883e-77d13e12d205
Je ziet in deze video dat de kleur verandert van de tekst en het icoontje waar je je op dat moment bevindt.
Wanneer je scrollt door de nieuws artikelen zie je dat ze van opacity 50% naar 100% gaat, waardoor je wat feedforward krijgt dat er onder nog meer te vinden is. 

## Kenmerken
<img width="301" height="485" alt="Image" src="https://github.com/user-attachments/assets/a04d57d1-a978-40a0-83a2-526a8da17d53" />
Ik heb een mapje 'views' gemaakt met daarin liquid bestanden van alle views en een mapje met 'partials', waar alle partials natuurlijk in staan.
<img width="299" height="135" alt="Image" src="https://github.com/user-attachments/assets/7be64437-28a5-4201-89b6-0fb1dbab2d17" />
Zo heb ik ook in mijn CSS bestanden de algeme styles en de partials styles onderscheiden. 

- In [mijn HTML](https://github.com/SebBastiaans/server-side-rendering-server-side-website/blob/cdb8f364fb3e763e5ecd29f489c65c140736e43f/views/index.liquid#L1-L49) render ik de partials, gerbuik ik 'if'/else', 'for loop', wat typisch liquid code is. 
- In [mijn CSS](https://github.com/SebBastiaans/server-side-rendering-server-side-website/blob/cdb8f364fb3e763e5ecd29f489c65c140736e43f/public/styles/styles.css#L20-L78) nest ik nogsteeds veel, maar gebruik ik wel meer classnames dan voorheen omdat het anders kan conflicten met styling in andere views. Deze classnames zijn allemaal in het Engels en opgebouwd in de kebab vorm. Ook heb ik geleerd om 'MARK:' in [mijn comments](https://github.com/SebBastiaans/server-side-rendering-server-side-website/blob/cdb8f364fb3e763e5ecd29f489c65c140736e43f/public/styles/styles.css#L20) te doen zodat je de comment snel terugvindt in je minimap rechtsboven in de editor.
- Los van het werken met dynamische data heb ik nog geen JavaScript gebruikt.

### Interacties in code
- Active state: In mijn server.js [vraag ik aan JS in welk path ik zit](https://github.com/SebBastiaans/server-side-rendering-server-side-website/blob/cdb8f364fb3e763e5ecd29f489c65c140736e43f/server.js#L182) en render dat mee. Dit geef ik bij [het renderen](https://github.com/SebBastiaans/server-side-rendering-server-side-website/blob/cdb8f364fb3e763e5ecd29f489c65c140736e43f/views/nieuws.liquid#L44) van bijvoorbeeld de navbar mee op elke view. Dan in de navbar vraag ik of het [de path contains](https://github.com/SebBastiaans/server-side-rendering-server-side-website/blob/cdb8f364fb3e763e5ecd29f489c65c140736e43f/views/partials/navbar.liquid#L8). Zo ja, dan komt er een [CSS class](https://github.com/SebBastiaans/server-side-rendering-server-side-website/blob/cdb8f364fb3e763e5ecd29f489c65c140736e43f/public/styles/partials.css#L20-L27) op met de styling

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
