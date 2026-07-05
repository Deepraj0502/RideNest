export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
        R
      </div>

      <div>
        <h1 className="text-lg font-bold">RideNest</h1>
        <p className="text-xs text-muted-foreground">
          Smart School Transport
        </p>
      </div>
    </div>
  );
}