using System;

public class Program
{
    public static void Main()
    {
        double a = double.Parse(Console.ReadLine());
        double b = double.Parse(Console.ReadLine());

        bool isEqual = Math.Abs(a - b) <= 0.000001;

        Console.WriteLine(isEqual);
    }
}

