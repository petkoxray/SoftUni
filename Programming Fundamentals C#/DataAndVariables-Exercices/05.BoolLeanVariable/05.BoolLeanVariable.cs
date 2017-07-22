using System;

public class Program
{
    public static void Main()
    {
        string variableInString = Console.ReadLine();

        bool isTrue = Convert.ToBoolean(variableInString);
        Console.WriteLine(isTrue ? "Yes" : "No");

    }
}

