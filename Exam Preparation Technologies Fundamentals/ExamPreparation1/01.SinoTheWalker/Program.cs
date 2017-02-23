using System;
using System.Globalization;

public class SinoTheWalker
{
    public static void Main()
    {
        var leaveTime = DateTime.ParseExact(Console.ReadLine(), "HH:mm:ss", CultureInfo.InvariantCulture);
        var numberOfSteps = ulong.Parse(Console.ReadLine());
        var secondsPerStep = ulong.Parse(Console.ReadLine());

        var totalSeconds = (numberOfSteps * secondsPerStep) % (24 * 60 * 60);
        var arriveTime = leaveTime.AddSeconds(totalSeconds);
        Console.WriteLine($"Time Arrival: {arriveTime:HH:mm:ss}");
    }
}

