# Reading Assignment - 13
### Date 2-20-2021

## Summarize the topics in the below links
1. [Local Storage](#local-storage)
    - [Local Storage](http://diveinto.html5doctor.com/storage.html)

## Local Storage
- Before HTML5, the options for local storage all involved cookies and flash
- Which were not very good options

- The problem that local storage in HTML 5needed to solve
  - A LOT OF STORAGE SPACE
  - on the client
  - that persists beyond a page refresh
  - and isn't transmitted to the server

- HTML 5 found a more logical way to solve this across multiple browsers without the use of third party plug ins by storing key value pairs between browser shut downs, refresh, etc.

### Browsers that support HTML 5-
  - IE 8.0 +
  - Firefox 3.5+
  - Safari 4.0+
  - Chrome 4.0+
  - Opera 10.5+
  - Iphone 2.0+
  - Androiid 2.0+

  ### Class notes about local storage
  - Put the sweater in the box for summer
  - fall time comes around - grab the box - open it up and have a sweater


  ### Sweeater - object
  - box with sweater - json.stringafy
  - put on shelf -set to local storage (successfully stored)
  - take box off shelf and open it -json.parse
  - sweater out of box - usable data (Does it look the same?, do we want it to look the same?)

  - LocalStorage.setItem('itemName",data)
  - LocalStorage.getItem('itemName",data)
### Example
 - let stringifiedProducts = JSON.stringify(allProducts)
 - stringifiedProducts
 -  localStorage.setItem('Products', stringifiedProducts)

 - let retrievedGoats = localStorage.getItem('products');
 - let parsedProducts = JSON.parse(retrievedProducts);