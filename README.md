# Mental Health State Detection
A website developed on the flask framework that helps to detect the current mental state of an user.
# Motivation
Depression has become a major health problem has increased in primary
care settings.It has a huge impact on those who are suffering from it as well as on their families.So
there is a need to develop applications that try to detect the current mental health state of the user.

## Description
The Proposed Solution consists of deriving results using
OpenCV and Sentimental Analysis. 

OpenCv is used in two of the modules of the website

- One is the **Heart pulses rate module** where heart
rate is measured of the intended user.The principle behind it is,
to extract heart rate data from facial skin color variation which
is caused by blood circulation.
- The second module is the Facial Emotion Detection module
using OpenCv. This module uses deep convolutional neural
networks to classify the emotion detected on the person’s
face.The FER-2013 dataset which is present in Kaggle is
used to train our model. This dataset consists of face images
portraying seven emotions - Angry, Disgusted,Sad,Neutral,
Happy,Very Happy and Joyful. 

Sentiment Analysis is used in the other two modules of our website
We use it in our questionnaire and our chatbot. 
- In the questionnaire, there are ten
exclusive questions that are used to find an individual’s state
of mind. These questions are in the form of MCQ’s having
3 answers to them

- Finally we have a chatbot developed using the dialogflow API.We train this bot to understand sentiments using tweets we scrape from Twitter.
The results of these four modules are integrated together to give the final mental state of the user.

## System Workflow
![alt text](https://github.com/simplysom/Mental-Health/blob/master/Architecture.png?raw=true)

## Result

## Future Scope
- The work on improving the accuracy of the sentimental
analysis that is, giving weights to negative words so that we
can get different values for negative words according to the
context in which they are used and the strength of negativeness
they contain. This would help us to analyze in a more enhanced
way.
- This scope is more on the feature side that is to include
a mood-based recommendation of songs according to the
analysis done on individual’s state of mind after going through
the Psychological Screening Test.

## Requirements
You need to get a twitter developer account to get the twitter API so as to scrape tweets to train the bot or you can make use of the csv files we have added in the repository.
