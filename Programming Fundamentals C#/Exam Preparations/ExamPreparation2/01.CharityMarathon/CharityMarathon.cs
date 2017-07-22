using System;

public class CharityMarathon
{
    public static void Main()
    {
        var days = decimal.Parse(Console.ReadLine());
        var runners = decimal.Parse(Console.ReadLine());
        var averageNumOfLaps = decimal.Parse(Console.ReadLine());
        var lapLenght = decimal.Parse(Console.ReadLine());
        var capacityOfLap = decimal.Parse(Console.ReadLine());
        var moneyPerKm = decimal.Parse(Console.ReadLine());

        if (days * capacityOfLap <= runners)
        {
            runners = days * capacityOfLap;
        }

        var totalKms = 1L * (runners * averageNumOfLaps * lapLenght) / 1000L;
        var money = totalKms * moneyPerKm;

        Console.WriteLine($"Money raised: {money:f2}");
    }
}