using System;

public class Program
{
    public static void Main()
    {
        int pictuersAmount = int.Parse(Console.ReadLine());
        int filterTime = int.Parse(Console.ReadLine());
        int filterFactor = int.Parse(Console.ReadLine());
        int uploadTime = int.Parse(Console.ReadLine());

        long allFilterTime = (long)filterTime * pictuersAmount;
        long filtredPictures = (long)Math.Ceiling(pictuersAmount * (filterFactor / 100.0));
        long allUploadTime = uploadTime * filtredPictures;

        long allTime = allFilterTime + allUploadTime;
        TimeSpan timeSpan = TimeSpan.FromSeconds(allTime);

        Console.WriteLine("{0:d1}:{1:d2}:{2:d2}:{3:d2}",
            timeSpan.Days,
            timeSpan.Hours,
            timeSpan.Minutes,
            timeSpan.Seconds
            );
    }
}

