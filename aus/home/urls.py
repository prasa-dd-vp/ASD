#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Feb 21 14:20:59 2019

@author: venkat-pt2636
"""

from django.contrib import admin
from django.urls import path
from django.conf.urls import include, url
from . import views

urlpatterns = [
    url('all/', views.home),
    url('news/', views.news),
    url('survey/', views.survey),
    url('url/', views.result),
]