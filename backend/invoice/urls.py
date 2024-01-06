from django.urls import path
from .views import *

urlpatterns = [
    path("signup/", SignupView.as_view(), name="Signup-View"),
    path("login/", LoginView.as_view(), name="Login-View"),
    path("invoices/", InvoiceView.as_view(), name="Invoice-View"),
    path("invoices/new/", InvoiceView.as_view(), name="Post-invoice"),
    path("invoices/<int:id>/", SpecificView.as_view(), name="Specific-View"),
    path("invoices/<int:id>/items/", AddItem.as_view(), name="Add-View"),
]
