using System;

public class Program
{
    public static void Main()
    {
        int number = int.Parse(Console.ReadLine());

        string hexNumber = number.ToString("X");
        string binNumber = Convert.ToString(number, 2);
        Console.WriteLine(hexNumber);
        Console.WriteLine(binNumber);
    }
}

