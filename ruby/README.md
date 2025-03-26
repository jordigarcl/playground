# ruby

```bash
ruby hello-world.rb
```


## Stack

- docker base image: 
  - [`ubuntu`](https://hub.docker.com/_/ubuntu)
    - packages:
      - [`build-essential`](https://packages.ubuntu.com/plucky/build-essential)
      - [`git`](https://packages.ubuntu.com/plucky/git)
      - [`ruby-full`](https://packages.ubuntu.com/plucky/ruby-full)
        - gems:
          - [`bundler`](https://bundler.io/)

## On dependencies (i.e. gems)

Default gems:
- [irb](https://github.com/ruby/irb)

Package manager

## Notes

Notable gems:
- base64
- bundler
- csv
- date
- digest
- erb
- irb
- json
- logger
- prism
- rdoc
- rubygems
- set
- singleton
- time
- timeout



## Recipes


```bash
# Check whether Ruby is installed
$ ruby --version


# Type Ruby code
$ ruby
puts "Hello, world!"
^D
# => Hello, world!
```


## Wiki

In Ruby (virtually) everything is an object

```ruby
5.even? #=> false
```

Examples of Ruby concepts that are **not** objects include: 
- core language constructs (`begin...end`, `rescue`, `ensure`)
- control keywords (`if/else/while/for/end`)
- blocks (`{...}`, `do...end`), though they can be converted into objects using `Proc` or `lambda` 
- methods (`def...end`), though an object representation of them can be obtained using `Object#method`

### Interactive Ruby

Ruby ships with a default gem called [irb](https://github.com/ruby/irb)

### Dependency Management

Ruby's official package management system is called [RubyGems](https://en.wikipedia.org/wiki/RubyGems). It provides a standard format for distributing Ruby packages in a self-contained format called **gem**. It also hosts the main [public repository](https://rubygems.org/search?) for gems.

The interface for RubyGems is the `gem` binary. It is used to install and manage gems like so:


```bash
gem environment

gem list

gem search

gem install gem_name --version 1.0.0
gem update
gem uninstall gem_name
```

RubyGems integrates with Ruby's run-time loader to help find and load installed gems from standardized library folders.

> Historically, it was required 

Gems follow a [standard structure](https://guides.rubygems.org/what-is-a-gem/). Among other things, all gems include a [`gem-name.gemspec`](https://guides.rubygems.org/specification-reference/) file, which specifies information about the gem.


Large portions of Ruby's standard library come in the form of gems. These are [Ruby Standard Gems](https://stdgems.org/), and there are three different kinds of them:

- Default gems: Gems that are part of Ruby and can't be removed.
- Bundled gems: Gems that are automatically installed alongside Ruby and they can be removed if desired.
- Default libraries: Libraries that are part of Ruby and are not not actually gems.



bundler

There are 

- Rake
- minitest
- Readline
