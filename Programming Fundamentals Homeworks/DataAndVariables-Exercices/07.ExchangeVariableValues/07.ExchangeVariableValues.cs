using System;

public class Program
{
    public static void Main()
    {
        int a = 5;
        int b = 10;
        Console.WriteLine("Before:");
        Console.WriteLine($"a = {a}");
        Console.WriteLine($"b = {b}");

        int tempValue = b;
        b = a;
        a = tempValue;
        Console.WriteLine("After:");
        Console.WriteLine($"a = {a}");
        Console.WriteLine($"b = {b}");

    }
}

