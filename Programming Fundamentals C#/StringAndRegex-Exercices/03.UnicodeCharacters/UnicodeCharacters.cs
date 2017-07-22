using System;
using System.Text;

class UnicodeCharacters
{
    static void Main()
    {
        var input = Console.ReadLine();
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < input.Length; i++)
        {
            sb.Append(String.Format("\\u{0:x4}", (int)input[i]));
        }

        Console.WriteLine(sb.ToString());
    }
}

