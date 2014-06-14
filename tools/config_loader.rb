require 'json'

module ConfigLoader
  @binding
  @hash

  class BindingFactory
    def initialize (hash)
      hash.each do |key, value|
        instance_variable_set("@#{key}", value)
      end
      instance_variable_set("@env", hash)
    end

    def get_binding
      return binding()
    end
  end

  def self.load_config
    File.open('config.json','r') do |file|
      @hash = JSON.parse(file.read)
    end
    
    widget_name = @hash['widget_name']
    @subhash = {
      'widget_html_content' => File.open("#{widget_name}.html","rb").read,
      'widget_css_content' => File.open("#{widget_name}.css","rb").read,
      'widget_javascript_content' => File.open("#{widget_name}.js","rb").read,
    }
    @hash.merge!(@subhash)
    binding_factory = BindingFactory.new (@hash)
    @binding = binding_factory.get_binding
  end

  def self.get_binding
    return @binding
  end

  def self.hash
    return @hash
  end

  load_config

end
