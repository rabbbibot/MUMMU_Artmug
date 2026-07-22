import pathlib

root = pathlib.Path(r"C:\Users\CHOI-KYUYEON\Desktop\AI\커미션")

for path in root.glob("*.html"):
    text = path.read_text(encoding="utf-8")
    text = text.replace(
        'href="fonts/Mulmaru.woff2" as="font" type="font/woff2"',
        'href="fonts/PretendardVariable.woff2" as="font" type="font/woff2"',
    )
    path.write_text(text, encoding="utf-8", newline="\n")

print("updated preload links")
