from django.shortcuts import render
from products.models import Product


# Create your views here.
def search_view(request):
    products = Product.objects.filter(name__icontains=request.GET['q'])
    return render(request, "products.html", {"products": products})
