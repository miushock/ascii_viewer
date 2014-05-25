task :environment_js do
  load 'tools/config_loader.rb'
  require 'erb'
  
  @erb = ''
  File.open("generated/environment.js","w") do |output|
    File.open("template/environment.js.erb","r") do |template|
      @erb = ERB.new(template.read)
    end
    output.write @erb.result(ConfigLoader.get_binding)
  end
end

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
