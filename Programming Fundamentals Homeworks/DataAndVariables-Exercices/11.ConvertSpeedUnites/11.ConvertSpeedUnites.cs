using System;

public class Program
{
    public static void Main()
    {
        float distance = float.Parse(Console.ReadLine());
        float hours = float.Parse(Console.ReadLine());
        float minutes = float.Parse(Console.ReadLine());
        float seconds = float.Parse(Console.ReadLine());

        float allToSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;
        float allToHours = hours + (minutes / 60) + (seconds / 60 / 60);
        float distaceInKms = distance / 1000;
        float distanceInMiles = distance / 1609;
        float metersPerSeconds = distance / allToSeconds;
        float kmsPerHours = distaceInKms / allToHours;
        float milesPerHours = distanceInMiles / allToHours;

        Console.WriteLine(metersPerSeconds);
        Console.WriteLine(kmsPerHours);
        Console.WriteLine(milesPerHours);

    }
}

