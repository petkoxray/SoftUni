using System;
using System.Globalization;

public class SoftUniCoffeOrders
{
    public static void Main()
    {
        var orders = decimal.Parse(Console.ReadLine());

        var totalSum = 0M;

        for (int i = 0; i < orders; i++)
        {
            var pricePerCapsule = decimal.Parse(Console.ReadLine());
            var orderDate = DateTime.ParseExact(Console.ReadLine(), "d/M/yyyy", CultureInfo.InvariantCulture);
            var capsuleCount = decimal.Parse(Console.ReadLine());
            var daysInMonth = DateTime.DaysInMonth(orderDate.Year, orderDate.Month);
            var currentOrder = daysInMonth * capsuleCount * pricePerCapsule;
            Console.WriteLine($"The price for the coffee is: ${currentOrder:f2}");
            totalSum += currentOrder;
        }

        Console.WriteLine($"Total: ${totalSum:f2}");
    }
}

