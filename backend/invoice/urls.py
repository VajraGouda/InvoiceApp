from django.urls import path
from .views import *

urlpatterns = [

    path("user/signup", SignUpView.as_view(), name="signup"),
    path("invoices", InvoiceView.as_view(), name="invoices"),
    path("invoices/<int:id>", SpecificInvoice.as_view(), name="SpecificInvoice"),
    path("invoices/<int:invoice_id>/items", AddItemView.as_view(), name="AddItemView"),
    path("user/login", LoginView.as_view(), name="login"),
]
