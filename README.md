# Janssen TeleDoc  

An interactive touchscreen webapp to simulate a facetime call with a doctor.  
Users can select three different patient cases and navigate different parts.  
Video transitions based on users interaction.  

## Development  

`npm install` - install all dependencies  
`npm start` - compile code and make available on http://localhost:8080 using webpack-dev-server

## Deployment  

`npm run deploy` - Currently only one staging link, please don't deploy until a prod/staging link are ready.  

## Structure

App  
-- Doctor  
-- Patient  
---- Name  
---- Description  
---- Photo  
---- Sections  
------ Pages   
-- Header  
-- Footer  
-- Data  
-- Timeout  
--


## Notes  

- Chrome flags need to be set: #autoplay-policy=no-user-gesture-is-required
- after exporting vids use `rename 's/.{3}(.*)/$1/' *` to strip prefix
- For development you can increase video speed with the arrow keys


## TODO  

- Add routes (clinical data, video speed, etc.)
- UPdate All CSS to match latest sketch files
- Refreshing causes issues (trying to play video without slide button)
- page scrolls left issue!
- slide button needs work, bounces left
- replace router # with & since bookmarks are forcing a horizontal scroll
- check styling on clinical data slides at 2560x1440, slides hitting max width and distorting
