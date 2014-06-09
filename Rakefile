task :load_config do
  load 'tools/config_loader.rb'
  @config_hash = ConfigLoader.hash
  @binding = ConfigLoader.get_binding
  puts 'load_config.....'
end

task :environment_js => :load_config do
  require 'erb'
  @erb = ''
  File.open("generated/environment.js","w") do |output|
    File.open("template/environment.js.erb","r") do |template|
      @erb = ERB.new(template.read)
    end
    output.write @erb.result(@binding)
  end
end

task :view => :load_config do
  require 'erb'
  @erb = ''
  widget_name = @config_hash["widget_name"]
  File.open("generated/#{widget_name}.html","w") do |output|
    File.open("template/container.html.erb","r") do |template|
      @erb = ERB.new(template.read)
    end
    
    output.write @erb.result(@binding)
  end
end

task :resourcify => :load_config do
  widget_name = @config_hash["widget_name"]

  require 'json'
  html_file = File.open("#{widget_name}.html","r")
  html_content = html_file.read
  js_file = File.open("#{widget_name}.js","r")
  js_content = js_file.read
  css_file = File.open("#{widget_name}.css","r")
  css_content = css_file.read
  resource_content = {:html => html_content, :javascript => js_content, :css=>css_content}.to_json

  File.open("generated/resource_file","w") do |file|
    file.write(resource_content)
  end
end
