# Concepts de base en géovisualisation

---

_Cours du Master en géographie 1ère année, semestre d'automne 2017._

---

__Enseignant:__ Christian Kaiser, Géopolis 3610

__Assistants:__

- Lucien Grangier
- Lucas Martinez
- Ludivine Stofer

__Horaire du cours:__ mercredi 13h15 - 15h00

__Salles:__ 

- Théorie (1ère partie): à Géopolis, salle exacte voir plan de cours
- Pratique (2ème partie, salle informatique): Géopolis 2113


__Documents de cours:__ [https://github.com/christiankaiser/geovis1](https://github.com/christiankaiser/geovis1)

__Q&A / Discussions / Annonces__: [geovis1.slack.com](https://geovis1.slack.com). Utilisez [ce lien](https://join.slack.com/t/geovis1/signup) pour joindre le forum (il faut utiliser votre adresse UNIL pour pouvoir joindre).

---

## 1. Objectif
La visualisation de l’information géographique ou géovisualisation est une composante importante de la science de l’information géographique. La géovisualisation est concernée par le développement théorique, méthodologique et technique de nouvelles manières de représenter l’information géoréférencée pour l’exploration visuelle, la synthèse et la communication, afin de mieux faire face aux défis environnementaux et sociaux des systèmes territoriaux.
Les paradigmes et développements de la géovisualisation sont liés autant à ceux de la visualisation, de la visualisation scientifique, des nouvelles technologies de l’information et de la communication (NTIC), qu’à ceux des sciences cognitives. La géovisualisation, qui est également  très liée à la cartographie, met aussi l’accent sur l’utilisation de méthodes visuelles comme support à la création et la diffusion de connaissances, la prise de décisions et la résolution de problèmes.
Ce cours de 1 semestre permet d’introduire quelques concepts de base, méthodes et outils simples de géovisualisation par des enseignements théoriques et pratiques (travaux pratiques), puis par le développement d’un petit projet individuel.## 2. Contenu
Cet enseignement examinera les implications théoriques et pratiques de la visualisation de l’information géographique. A ce titre, on aborde les liens entre la visualisation scientifique, la cartographie, l’analyse de données, la communication efficace et les nouvelles technologies. Les paradigmes dominants, les acteurs principaux, l’agenda de recherche et les principales catégories de méthodes et d’environnements de visualisation sont présentés et discutés. Ce cours de 1 semestre fournit une formation générale sur la visualisation interactive, mais ne permet pas d’entrer dans la pratique de méthodes avancées.## 3. PrérequisDes bonnes notions en cartographie thématique, Systèmes d’Information Géographique (SIG) et en méthodes statistiques sont nécessaires.


## 4. Évaluation
L’évaluation se fait par le biais d’un projet individuel de cartographie interactive qui permet en même temps d’appliquer les concepts théoriques et la pratique appris pendant le cours.## 5. Enseignement28 heures, à raison de 2 heures par semaine pendant le semestre d’automne.
Généralement, la première heure de chaque cours sera consacrée aux concepts théoriques, tandis que la deuxième heure est réservée pour l’atelier pratique.## 6. Investissement attenduL’ECTS représente une charge de travail impliquant au sens large la présence aux enseignements, les ateliers pratiques, le travail personnel de suivi en bibliothèque, en laboratoire et à la maison, les stages et autres activités pratiques, les travaux de terrain, la préparation aux évaluations.
1 crédit ECTS correspond à 25–30 heures de travail académique (cours, préparation, lectures, ateliers, préparation aux évaluations). Un enseignement de 4 ECTS correspond donc à 100-120 heures généralement sur un semestre. 60 crédits ECTS = 1500–1800 heures correspondent à une année académique à plein temps.
Cet enseignement de 4 crédits ECTS implique donc 100-120 heures au total, réparties sur l’ensemble du semestre, soit 14 semaines. Cela fait environ 7-8 heures par semaine, dont environ 2 heures de présence dans le cours, et environ 5-6 heures de travail en moyenne en dehors des heures de cours.## 7. Plan du cours

Semaine  | Date  | Cours | Atelier | Salle (à Géopolis)
:-------:|:-----:|-------|---------|:-------:|
1        | 20.9. | Objectifs et programme du cours.<br>Introduction à la géovisualisation | Création d'une story map | C:2121<br>A:2113
2        | 27.9.  | Techniques de représentation cartographique | Visualisation SVG | C:2207<br>A:2113
3        | 4.10.  | WebMapping: concepts de base  | Cartographie interactive avec Leaflet (1/3) | C:2121<br>A:2113
4        | 11.10. | Représentation de données et formes visuelles: du statique au dynamique | HTML + CSS | C:2238<br>A:2113
5        | 18.10. | **<span style="color: #f00;">Retour sur l'atelier HTML + CSS</span>** | Javascript | <span style="color:#f00;">**C:2113**</span><br>A:2113
6        | 25.10. | Représentation graphique et analyse visuelle | Cartographie interactive avec Leaflet (2/3)  | C:2238<br>A:2113
7        | 1.11.  | Human Computer Interaction | Cartographie interactive avec Leaflet (3/3) | C:2238<br>A:2113
8        | 8.11.  | Cartographie collaborative | Édition de données OSM et création de fonds de cartes personnalisés | C:TBA<br>A:2113
9        | 15.11. | Gestion de projets de géovisualisation | __Démarrage du projet individuel__ | C:TBA<br>A:2113
10       | 22.11. | Géoportails, infrastructures de données spatiales et standards ouverts | Travail sur le projet individuel | A:2113
11       | 29.11. | - | Travail sur le projet individuel | A:2113
12       | 6.12.  | - | Travail sur le projet individuel | A:2113
13       | 13.12. | - | Travail sur le projet individuel | A:2113
14       | 20.12. | __Rendu du projet individuel__
Si deux salles sont indiquées, la première réfère à la première partie du cours (C:...), tandis que la deuxième salle correspond à l'atelier pratique en deuxième partie (A:...).## 8. Références
- Andrienko, G., Andrienko, N., Demsar, U., Dransch, D., Dykes, J., Fabrikant, S. I., Jern, M., Kraak, M.-J., Schumann, H. and Tominski, C. (2010). Space, Time, and Visual Analytics, International Journal of Geographical Information Science, 24(10), pp. 1577–1600. doi:10.1080/13658816.2010.508043
- Bertin, J. 1977. La graphique et le traitement graphique de l'information. Flammarion, Paris, France.
- Chaomei C. (2003). Visualizing Scientific Paradigms: An Introduction, Journal of the American Society for Information Science and Technology, 54(5), pp. 392–393. doi:10.1002/asi.10224
- Dodge, M., McDerby, M., and Turner, M. (2008). The Power of Geovisualization. In: Dodge, M., McDerby, M., and Turner, M., (eds.), Geographic Visualization: Concepts, Tool, and Applications, Wiley, Chichester, UK, pp. 1-10.
- Harrower, M. and Fabrikant, S. I. (2008). The Role of Map Animation in Geographic Visualization. In: Dodge, M., Turner M., and McDerby, M., (eds.), Geographic Visualization: Concepts, Tools and Applications, Wiley, Chichester, UK: 49-65.
- Hegarty, M., Smallman, H.S., Stull, A.T. and Canham, M.S. (2009). Naïve Cartography: How Intuitions about Display Configuration Can Hurt Performance. Cartographica, 44(3), pp. 171–186. doi:10.3138/carto.44.3.171.
- Jiang, B. and Li, Z. (2005). Geovisualization : Design, Enhanced Visual Tools and Applications, The Cartographic Journal, 42 (1): 3-4. doi:10.1179/000870405X52702
- Kraak, M.-J. and Ormeling, F. (2008). Cartography: Visualization of Geospatial Data, 2nd ed., Prentice Hall, New Jersey.
- MacEachren, A. (2001). An Evolving Cognitive-Semiotic Approach to Geographic Visualization and Knowledge Construction, Information Design Journal, 10(1), pp. 26–36.
- MacEachren, A. and Kraak, M.J. (2001). Research Challenges in Geovisualization. Cartography and Geographic Information Science, 28(1). 
- Slocum, T.A., McMaster, R.B., Kessler, F.C., Howard, H.H. (2009). Thematic Cartography and Geographic Visualization, 3rd edition, Prentice Hall, Series in Geographic Information Science, Upper Saddle River NJ.
- Tufte, E.R. (2001) Envisioning information, Cheshire Conn.: Graphics Press.
- Tufte, E.R. (2002) Visual explanations: images and quantities, evidence and narrative, Cheshire Conn.: Graphics Press.
- Tufte, E.R. (2006) Beautiful evidence, Cheshire, Conn.: Graphics Press. 
- Ware, C. (2008). Visual Thinking for Design. Elsevier, Morgan Kaufmann, Burlington, MA: 1-42. 
