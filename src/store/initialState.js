const initialState = {
    "messengerData": [
        { "person": "Stasic", "userId":1, "key": 1 },
        { "person": "Anya", "userId":2, "key": 2 },
        { "person": "Ilon", "userId":3, "key": 3 },
        { "person": "Louis", "userId":4, "key": 4 },
        { "person": "Zlatan", "userId":5, "key": 5 }
      ],
      "menuData": [
        { "link": "/map", "navName": "map", "key": 1 },
        { "link": "/messenger", "navName": "messenger", "key": 3 },
        { "link": "/offer", "navName": "offer", "key": 4 },
        { "link": "/profile", "navName": "profile", "key": 5 },
        { "link": "/setting", "navName": "setting", "key": 6 },
        { "link": "/stack", "navName": "stack", "key": 7 },
        { "link": "/test", "navName": "test", "key": 8 }
      ],
      "navBottomData": [
        { "link": "*", "navName": "back", "key": 1 },
        { "link": "/menu", "navName": "menu", "key": 2 },
        { "link": "/stack", "navName": "stack", "key": 3 }
      ],
      "langaugeData": [
        { "langauge": "Ukrainian", "flag": "flag", "key": 1 },
        { "langauge": "Chinese", "flag": "flag", "key": 2 },
        { "langauge": "English", "flag": "flag", "key": 3 },
        { "langauge": "Spanish", "flag": "flag", "key": 4 },
        { "langauge": "Arabic", "flag": "flag", "key": 5 },
        { "langauge": "French", "flag": "flag", "key": 6 },
        { "langauge": "German", "flag": "flag", "key": 7 },
        { "langauge": "Italian", "flag": "flag", "key": 8 },
        { "langauge": "Turkish", "flag": "flag", "key": 9 },
        { "langauge": "Korean", "flag": "flag", "key": 10 },
        { "langauge": "Hindi", "flag": "flag", "key": 11 },
        { "langauge": "Japanese", "flag": "flag", "key": 12 }
      ],
      "settingData": [
        { "navName": "main", "link": "/mainSetting", "key": 1 },
        { "navName": "notifications", "link": "/notificationsSetting", "key": 2 },
        { "navName": "location", "link": "/locationSetting", "key": 3 },
        { "navName": "theme", "link": "/themeSetting", "key": 4 }
      ],
      "stackData": [
        {
          "flag": "sp",
          "km": 5,
          "money": 10,
          "key": 1,
          "description": "Ivan attempts to bribe the police officer, but the officer refuses."
        },
        {
          "flag": "ukr",
          "km": 4,
          "money": 10,
          "key": 2,
          "description": "On 26 March, the barber Ivan Yakovlevich finds out that his wife has made bread. He tries to get rid of the nose by throwing it into the Neva River, but he is caught by a police officer. Ivan attempts to bribe the police officer, but the officer refuses."
        },
        {
          "flag": "eng",
          "km": 5,
          "money": 10,
          "key": 3,
          "description": "With horror, he recognizes this nose as that of one of his regular customers, Collegiate Assessor Kovalyov (known as 'Major Kovalyov')."
        },
        {
          "flag": "pol",
          "km": 6,
          "money": 10,
          "key": 4,
          "description": "Ivan's wife demands that Ivan remove the nose from her home, so he wraps it up in cloth and attempts to throw it off a bridge. He tries to get rid of the nose by throwing it into the Neva River, but he is caught by a police officer."
        },
        {
          "flag": "it",
          "km": 9,
          "money": 10,
          "key": 5,
          "description": "He tries to get rid of the nose by throwing it into the Neva River, but he is caught by a police officer. Ivan attempts to bribe the police officer, but the officer refuses."
        },
        {
          "flag": "fra",
          "km": 7,
          "money": 10,
          "key": 6,
          "description": "On 26 March, the barber Ivan Yakovlevich finds out that his wife has made bread. During breakfast, he cuts a loaf in half and finds a nose in his bread. With horror, he recognizes this nose as that of one of his regular customers, Collegiate Assessor Kovalyov (known as 'Major Kovalyov'). Ivan's wife demands that Ivan remove the nose from her home, so he wraps it up in cloth and attempts to throw it off a bridge. He tries to get rid of the nose by throwing it into the Neva River, but he is caught by a police officer. Ivan attempts to bribe the police officer, but the officer refuses"
        }
      ]
}

export default initialState;