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

  def self.load_config_file
    File.open('config.json','r') do |file|
      @hash = JSON.parse(file.read)
    end

    binding_factory = BindingFactory.new (@hash)
    @binding = binding_factory.get_binding
  end

  def self.get_binding
    return @binding
  end

  def self.hash
    return @hash
  end

  load_config_file

end
