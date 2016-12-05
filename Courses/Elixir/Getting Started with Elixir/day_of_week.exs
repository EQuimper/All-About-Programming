defmodule Sample.Calendar do
  def describe_date(date) do
    case date do
      {1, _, _} -> "Brand new month!"
      {25, 12, _} -> "Merry Christmas"
      {25, month, _} -> "Only #{12 - month} months before Christmas"
      {31, 10, 1517} -> "The reformation is starting"
      {31, 10, _} -> "Happy Halloween"
      {_, month, _} when month <= 12 -> "Just an average day"
      {_, _, _} -> "Invalid Month"
    end
  end

  def send_tweet do
    case File.read(path) do
      {:ok, data} -> Tweet.send(data)
      {:error, error} -> IO.puts "Could not operate cause of #{error}"
    end
  end
end
