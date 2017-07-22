using System;
using System.Collections.Generic;
using System.Linq;

class Driver
{
    public string Name { get; set; }
    public double Fuel { get; set; }
}

public class EnduranceRally
{
    public static void Main()
    {
        var driverNames = Console.ReadLine().Split();
        var zones = Console.ReadLine().Split().Select(double.Parse).ToArray();
        var checkpoints = Console.ReadLine().Split().Select(int.Parse).ToArray();
        var drivers = new Dictionary<Driver, int>();

        for (int i = 0; i < driverNames.Length; i++)
        {
            var driver = new Driver
            {
                Name = driverNames[i],
                Fuel = (double)(driverNames[i][0])
            };
            drivers.Add(driver, 0);
            for (int j = 0; j < zones.Length; j++)
            {
                if (checkpoints.Contains(j))
                {
                    driver.Fuel += zones[j];
                    drivers[driver]++;
                }
                else
                {
                    driver.Fuel -= zones[j];
                    if (driver.Fuel <= 0)
                    {
                        break;
                    }
                    drivers[driver]++;
                }
            }
        }

        PrintResult(drivers);

    }

    private static void PrintResult(Dictionary<Driver, int> drivers)
    {
        foreach (var driver in drivers)
        {
            if (driver.Key.Fuel > 0 )
            {
                Console.WriteLine($"{driver.Key.Name} - fuel left {driver.Key.Fuel:f2}");
            }
            else
            {
                Console.WriteLine($"{driver.Key.Name} - reached {driver.Value}");
            }
        }
    }
}

