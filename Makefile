MIXINS=$(wildcard mixins/*)
LAYOUTS=$(wildcard layouts/*)
PAGES=$(wildcard pages/*)
FILES=$(PAGES:pages/%.jade=%.html)

%.html: pages/%.jade $(MIXINS) $(LAYOUTS)
	scripts/build_page $*

all: $(FILES)
