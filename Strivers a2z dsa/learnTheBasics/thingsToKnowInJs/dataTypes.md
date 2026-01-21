Language	Numeric Types	Text / Char	Boolean	Collections (Core)	Special / Null	User-Defined Types	Notes
C++	short, int, long, long long, float, double, long double (+ unsigned mods)	char, wchar_t, char16_t, char32_t, std::string	bool	std::vector, std::array, std::list, std::deque, std::set, std::map, std::unordered_map	nullptr	struct, class, enum, union, templates	Static typing; sizes depend on platform; RAII & value semantics are common.
Java	byte, short, int, long, float, double	char (UTF-16), String	boolean	ArrayList, LinkedList, HashSet, HashMap, TreeMap, arrays	null	Classes, interfaces, enums, records	Static typing; primitives vs wrappers (int vs Integer); String immutable.
Python	int (arbitrary precision), float, complex	str	bool	list, tuple, dict, set, frozenset, range	None	Classes (everything is an object), dataclasses, enums, typing hints	Dynamic typing; immutable vs mutable matters (tuple vs list); integers unbounded.
JavaScript	number (IEEE-754), bigint	string	boolean	Array, plain objects ({}), Map, Set, WeakMap, WeakSet, TypedArray	null, undefined, NaN	Objects, classes (syntax over prototypes), symbols	Dynamic typing; type coercion; typeof null === "object" quirk; numbers are double-precision by default.


# primitive data types in js
string 
number 
bigint (no outside number limit {n})
boolean
null (typedof object)
undefined (typedof undefined)
symbol (unique identifier, immutable)
# non primitive 
Objects