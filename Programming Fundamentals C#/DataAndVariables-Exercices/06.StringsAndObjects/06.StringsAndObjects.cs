using System;

public class Program
{
    public static void Main()
    {
        string firstString = "Hello";
        string secondString = "World";
        object bothStrings = firstString + " " + secondString;
        string objectToString = (string)bothStrings;

        Console.WriteLine(objectToString);
    }
}

