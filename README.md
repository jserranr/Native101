# Native101
Repository for the first workshop in react-native

##Getting Started. React Native Tools##
Follow the instructions in the react native website, in order to install the
packages needed to run react native apps

You can install the packages to build and run the app for android
(for MacOSX, Linux and Windows OSes) and/or for iOS (MacOSX only)

 Should you encounter any problem, please contact me at jserra@naradarobotics.com
 or in person at my workplace


##Native101 app##

###With Git###

Follow these simple instructions:

```
  > git clone https://github.com/jserranr/Native101.git Native101
  > cd Native101
  > npm install
```

####Running on Android Emulator####
Running the app for android platform is avaiable for all OS, so we'll focus on that.
First, you must open AVD Manager via the Android Studio IDE by clicking the
AVD Manager icon ![alt text][AVDManagerIcon]

This opens the Android Virtual Device Manager console, where you can create new
virtual devices (run by android emulator in the computer) and run those instances.
If you have not created a virtual device on the installation process, do
that now.

Once you have a Virtual Device instance creted, click on the play icon to run it,
you'll see a window appearing with the device depicted on it. Leave it on and go
back to the terminal.

```
  > react-native run-android
```

This should trigger all the processes to run the app on the virtual environment,
provided the emulator is still running.

Note: be sure that you don't have any android device plugged in.



[AVDManagerIcon]: https://raw.githubusercontent.com/jserranr/Native101/master/_instructions/avdmanager_icon.png
[AVDManagerConsole]: https://raw.githubusercontent.com/jserranr/Native101/master/_instructions/avdmanager_console.png
