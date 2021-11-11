from django.urls import path
from .views import current_user, UserList, AllProducts, Product_Sort, Product_Search,Add_card


urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('products/', AllProducts.as_view()),
    path('search/', Product_Search.as_view()),
    path('add_card/',Add_card.as_view()),
    path('products/sort/',Product_Sort.as_view())
]