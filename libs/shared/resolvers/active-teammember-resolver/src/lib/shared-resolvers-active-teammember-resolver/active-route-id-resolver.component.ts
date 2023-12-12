import { ResolveFn } from '@angular/router';

export const ActiveRouteIdResolver: ResolveFn<string | null> = (
  route,
  state
) => {
  if (route.paramMap.has('id')) {
    return route.paramMap.get('id') ?? null;
  }

  let parentRoute = route.parent;
  while (parentRoute) {
    if (parentRoute.paramMap.has('id')) {
      return parentRoute.paramMap.get('id') ?? null;
    }
    parentRoute = parentRoute.parent;
  }

  return null;
};
