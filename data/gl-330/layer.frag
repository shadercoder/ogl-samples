#version 330 core

#define POSITION	0
#define COLOR		3
#define TEXCOORD	4
#define FRAG_COLOR	0

precision highp int;

const vec4 Color[4] = vec4[]
(
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0)
);

in block
{
	flat int Instance;
} In;

layout(location = FRAG_COLOR, index = 0) out vec4 FragColor;

void main()
{
	FragColor = Color[In.Instance];
}
