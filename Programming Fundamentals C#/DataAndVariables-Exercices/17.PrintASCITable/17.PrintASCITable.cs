using System;

public class Program
{
    public static void Main()
    {
        int startSymbole = int.Parse(Console.ReadLine());
        int endSymbol = int.Parse(Console.ReadLine());

        for (char i = (char)startSymbole; i <= (char)endSymbol; i++)
        {
            Console.Write(i + " ");
        }
    }
}

