# Nigerian App List

We decided to maintain an open list of good mobile applications built in Nigeria or developed for Nigerians. This will allow Nigerians find locally developed mobile applications on different platforms.


## How to add an app 

If you find a good mobile app developed by Nigerians or for Nigerians, you can follow these few steps to add them to the list:

- Fork the repo.
- Paste the information in the JSON file (applist.json). Here is an example below:

```json
{
    "appName": "Akpos Jokes",
    "appPublisher": "StackArena",
    "publisherUrl": "http://www.stackarena.com/",
    "appCategory": "Entertainment",
    "appDescription": "Akpos jokes app provides funny jokes on your mobile phone, you can add yours and rate others.",
    "appLogo": "img/apps/akposjokes.jpg",
    "appLink": [
                    {
                        "type": "Android",
                        "url": "https://play.google.com/store/apps/details?id=com.stackarena.akposjokes"
                    }
        ]
},
{
    "appName": "Jobberman",
    "appPublisher": "Jobberman",
    "publisherUrl": "http://www.jobberman.com",
    "appCategory": "Social",
    "appDescription": "Get access to jobs and vacancies in Nigeria from Nigeria's Jobs Website. Jobberman.com",
    "appLogo": "img/apps/jobberman.jpg",
    "appLink": [                
                    {
                        "type": "Android",
                        "url": "https://play.google.com/store/apps/details?id=com.jobberman"
                    },
                    {
                        "type": "IOS",
                        "url": "https://itunes.apple.com/us/app/jobberman/id716603451?mt=8"
                    }                
        ]
}
```

- Also include a .jpg file of the app logo in (img/apps) folder Note image should be 228x228 and less than 30kb. You can use http://compressjpeg.com/ to compress JPEG files.
- Make a pull request.


Alternatively, you can send us an email with the app info : info@nigerianapplist.com

## Contributing to the project

You can help improve the project by adding additional features, checking out for bugs, helping in bug fixes and enhancement.

Every application added to the main repo is automatically updated on the website.

Thanks!

Check out the website : http://nigerianapplist.com
