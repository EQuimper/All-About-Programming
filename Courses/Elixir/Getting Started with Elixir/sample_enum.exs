defmodule Sample.Enum do

  def fist(list, val \\ nil)
  def first([head | _], _), do: head
  def first([], val), do: val # shortcut

  def add(list, val \\ 0) do # default value
    trace(val)
    [val | list]
  end

  defp trace(string) do # This is a private function can only be can in a other function in this module
    IO.puts("The value passed in was #{string}")
  end
end

# iex(1)> Sample.Enum.add([:one, :two])
# [0, :one, :two]
# iex(2)> Sample.Enum.add([:one, :two], :zero)
# [:zero, :one, :two]

# # function return the last line

# defmodule Sample.Enum do
#   def first(list) when length(list) == 0, do: nil
#
#   def first([head | _]), do: head
# end
