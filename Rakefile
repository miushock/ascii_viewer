task :view do
  load 'tools/config_loader.rb'
  require 'erb'

  @erb = ''

  widget_name = ConfigLoader.hash["widget_name"]
  File.open("generated/#{widget_name}.html","w") do |output|
    File.open("template/container.html.erb","r") do |template|
      @erb = ERB.new(template.read)
    end
    
    output.write @erb.result(ConfigLoader.get_binding)
  end
end
