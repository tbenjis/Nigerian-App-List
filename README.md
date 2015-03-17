# Nigerian App List

I decided to maintain an open database of all mobile applications built in Nigeria. This will allow Nigerians find locally developed mobile applications on different platforms specifically (Android and IOS) for now.


## How to add an app 

If you find a good mobile app developed by Nigerians or for Nigerians, you can follow these few steps to add them to the list:

- Fork the repo.
- Paste the information in the JSON file (applist.json). Here is an example below:

<pre>
	
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
    }
    
</pre>

- Also include a .jpg/png file of the app logo in (img/apps) folder Note image should be 228x228 and less than 40kb.
- Make a pull request.


Alternatively, you can send us an email with the app info : info@nigerianapplist.com

## Contributing to the project

You can help improve the project by adding additional features, checking out for bugs, helping in bug fixes and enhancement.

Every application added to the main repo is automatically updated on the website.

Thanks!

Check out the website : http://nigerianapplist.com
