using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DataHelper;

namespace Lab_02
{
    class Program
    {
        private static IEnumerable<Employee> Employees = DataSource.Employees;
        private static IEnumerable<Product> Products = DataSource.Products;
        private static IEnumerable<ProductVendor> ProductVendors = DataSource.ProductVendors;
        private static IEnumerable<Vendor> Vendors = DataSource.Vendors;

        static void Main(string[] args)
        {
            Console.WriteLine("Lab 02 - LINQ");
            Console.WriteLine("=============\n");

            Exercise03();
        }

        static void Exercise03()
        {
            Console.WriteLine("Exercise 03 - Start");

            var productOfferings = from product in Products
                                   join productVendor in ProductVendors
                                       on product.ID equals productVendor.ProductID
                                   join vendor in Vendors
                                      on productVendor.VendorID equals vendor.ID
                                   select new { ProductName = product.Name, Price = productVendor.Price, Vendor = vendor.Name };

            var groups = from p in productOfferings
                         group p by p.ProductName;

            foreach (var group in groups)
            {
                Console.WriteLine($"Product {group.Key}");

                foreach (var productOffering in productOfferings.Where(x => x.ProductName == group.Key))
                {
                    Console.WriteLine("Offering: {0} by {1}", productOffering.Price, productOffering.Vendor);
                }
            }


            Console.WriteLine("Exercise 03 - End\n");
        }
    }
}
