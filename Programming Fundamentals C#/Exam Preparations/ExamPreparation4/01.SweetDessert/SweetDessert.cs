using System;

public class SweetDessert
{
    public static void Main()
    {
        decimal amountOfCash = decimal.Parse(Console.ReadLine());
        decimal numerOfGuests = decimal.Parse(Console.ReadLine());
        decimal bananaPrice = decimal.Parse(Console.ReadLine());
        decimal eggPrice = decimal.Parse(Console.ReadLine());
        decimal berriePrice = decimal.Parse(Console.ReadLine());

        var portions = Math.Ceiling(numerOfGuests / 6);
        var neededCash = (portions * 2 * bananaPrice) + (portions * 4 * eggPrice) + (portions * 0.2M * berriePrice);
        if (amountOfCash >= neededCash)
        {
            Console.WriteLine($"Ivancho has enough money - it would cost {neededCash:f2}lv.");
        }
        else
        {
            var needed = neededCash - amountOfCash;
            Console.WriteLine($"Ivancho will have to withdraw money - he will need {needed:f2}lv more.");
        }
    }
}

