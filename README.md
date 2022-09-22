# Project REST-Rant

REST-Rant is an app where users can review restaurants.

###User stories
As a user,
I need to be able to write a review for a resturant so I can let them know where to improve.

###Color Scheme
The color scheme should be
-#98c1d9
-#e0fbfc
-#ee6c4d

###Routes
|Method|Path|Purpose|
|------|----|-------|
|GET|`/`|Home page|
|GET|`/places`|Places index page|
|POST|`/places`|Create new place|
|GET|`places/new`|Form page for creating a new place|
|GET|`/places/:id`|Details about a particular place|
|PUT|`/places/:id`|Update a particular place|
|GET|`places/:id/edit`|Form page for editing an existing place|
|DELETE|`/places/:id`|Delete a particular place|
|POST|`/places/:id/rant`|Create a rant (comment) about a particular place|
|DELETE|`/places/:id/rant/:rantId`|Delete a rant (comment) about a particular place|
|GET|`*`|404 page (matches any route not defined above)|

###Places
|Field|Type|
|-----|----|
|name|string|
|city|string|
|state|string|
|cuisines|string|
|pic|string|