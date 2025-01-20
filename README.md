PratikNichit: provide me a readme file explain the functionality and technology used in this project

Workspace: Collecting workspace information

# RaiseIT App

RaiseIT is a mobile application designed to help citizens raise grievances directly to the local corporation (PMC). The app allows users to post issues, view posts, and interact with other users' posts by liking them. The app also provides different user roles such as citizens and officers, each with specific functionalities.

## Features

- **User Authentication**: Users can register, log in, and log out using Firebase Authentication.
- **Post Creation**: Users can create posts with images, descriptions, locations, and tags.
- **Post Viewing**: Users can view posts in a feed, including trending posts.
- **Like Functionality**: Users can like and unlike posts.
- **User Profiles**: Users can view their profile information and post count.
- **Role-Based Navigation**: Different navigation flows for citizens and officers.
- **Firebase Integration**: Uses Firebase for authentication, real-time database, and storage.

## Technology Stack

- **React Native**: For building the mobile application.
- **Expo**: For development and building the app.
- **Firebase**: For authentication, real-time database, and storage.
- **Formik**: For form handling and validation.
- **Yup**: For form validation schema.
- **React Navigation**: For navigation within the app.
- **AsyncStorage**: For local storage of user data.

## Project Structure

```
.
├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── eas.json
├── firebase.js
├── package.json
├── app/
│   ├── assets/
│   ├── components/
│   │   ├── AppAlert.js
│   │   ├── AppButton.js
│   │   ├── AppIconList.js
│   │   ├── AppPicker.js
│   │   ├── AppTextinput.js
│   │   ├── Card.js
│   │   ├── forms/
│   │   │   ├── AppForm.js
│   │   │   ├── AppFormField.js
│   │   │   ├── AppImageInput.js
│   │   │   ├── AppSubmitButton.js
│   │   │   ├── AppFormPicker.js
│   │   │   ├── ErrorMessage.js
│   │   │   └── index.js
│   │   ├── Icon.js
│   │   ├── ImageInput.js
│   │   ├── LikeButton.js
│   │   ├── PickerItem.js
│   │   ├── Post.js
│   │   ├── PostDetails.js
│   │   ├── Screen.js
│   │   ├── User.js
│   ├── navigation/
│   │   ├── AppNavigator.js
│   │   ├── CitizenNavigator.js
│   │   ├── FeedNavigator.js
│   │   ├── LoginNavigator.js
│   │   ├── MainNavigator.js
│   │   ├── NavigationTheme.js
│   │   ├── OfficerAppNavigator.js
│   │   ├── OfficerNavigator.js
│   │   └── TrendingFeedNavigator.js
│   ├── screens/
│   │   ├── AccountScreen.js
│   │   ├── AddPost.js
│   │   ├── Home.js
│   │   ├── LoginScreen.js
│   │   ├── OptionScreen.js
│   │   ├── RegisterScreen.js
│   │   ├── TagPostScreen.js
│   │   ├── TrendingPage.js
│   │   ├── ViewPost.js
│   │   └── WelcomeScreen.js
```

## Getting Started

1. **Clone the repository**:
   ```sh
   git clone <repository-url>
   cd RaiseIT_App_Final
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project.
   - Add your Firebase configuration to 

firebase.js

.

4. **Run the app**:
   ```sh
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
