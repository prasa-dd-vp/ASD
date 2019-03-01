from django.shortcuts import render

from django.http import JsonResponse
# Create your views here.
#ML Algorithm
import pandas as pd
# Importing the dataset
dataset = pd.read_csv('Autism_data.csv')
X = dataset.iloc[:, 3:21].values
y = dataset.iloc[:, 21].values

from sklearn.cross_validation import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25)

# Fitting Random Forest Classification to the Training set
from sklearn.ensemble import RandomForestClassifier
classifier = RandomForestClassifier(n_estimators = 10, criterion = 'entropy')
classifier.fit(X_train, y_train)

def home(request):
    return render(request,'home/asd-home.html')
   

# Add the two views we have been talking about  all this time :)
def survey(request):
    return render(request,"home/survey.html");


def news(request):
    return render(request, "home/news-asd.html");


    
def result(request):
    # Predicting the Test set results
    #y_pred = classifier.predict([[1,2,3]])
    #print(y_pred)

    # Now measure its performance with the test data
    #print(classifier.score(X_test, y_test))


    print("inside the function")
    f1 = int(request.POST.get("choice1"))
    f2=int(request.POST.get("choice2"))
    f3=int(request.POST.get("choice3"))
    f4=int(request.POST.get("choice4"))
    f5=int(request.POST.get("choice5"))
    f6=int(request.POST.get("choice6"))
    f7=int(request.POST.get("choice7"))
    f8=int(request.POST.get("choice8"))
    f9=int(request.POST.get("choice9"))
    f10=int(request.POST.get("choice10"))
    f11=int(request.POST.get("choice11"))
    f12=int(request.POST.get("choice12"))
    f13=int(request.POST.get("choice13"))
    f14=int(request.POST.get("choice14"))
    f15=int(request.POST.get("choice15"))
    f16=int(request.POST.get("choice16"))
    f17=int(request.POST.get("choice17"))
    f18=int(request.POST.get("choice18"))
    
    ans= classifier.predict([[f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17,f18]])
    print(ans[0])
    ansss = {"ans1":ans[0]}
    return JsonResponse(ansss)
    